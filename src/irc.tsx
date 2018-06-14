import {getDownloadLocation} from "./shared/reducers/root";

const { ipcMain: ipc } = require('electron');

const fs = require('fs');
const irc = require('irc');
const DCC = require('irc-dcc');

module.exports = (store) => {

    const client = new irc.Client('irc.rizon.net', 'testNick', {autoConnect: false, secure: true, port: 6697});
    const dcc = new DCC(client);

    client.addListener('error', function(message) {
        console.err('irc-err: ', message);
    });

    client.on('dcc-send', (from, args, message) => {
        console.log('received dcc request for file: ' + args.filename);
        const ws = fs.createWriteStream(paths.append(getDownloadLocation(store.getState()),args.filename));
        dcc.acceptFile(from, args.host, args.port, args.filename,
            args.length, (err, filename, con) => {
                console.log('accepting file');
                if (err) {
                    console.log(err);
                    //client.notice(from, err);
                    return;
                }
                con.on('data', () => console.log(con.bytesRead + '/' + args.length));
                con.pipe(ws);
            });
    });

    const connected = new Promise(client.connect);

    ipc.on('download', (event, {bot, pack}) => {
        connected.then(() => {
            client.say(bot, `xdcc send ${pack}`);
        });
    });
};
