import {getDownloadLocation} from "./shared/reducers/root";
import {Socket} from "net";

const { ipcMain: ipc } = require('electron');

const fs = require('fs');
const path = require('path');
const irc = require('irc');
const DCC = require('irc-dcc');

interface DccArgs {
  host: string;
  port: number;
  filename: string;
  length: number;
}

module.exports = (store : {getState: ()=>{}}) => {

    const client = new irc.Client('irc.rizon.net', 'testNick', {autoConnect: false, secure: true, port: 6697});
    const dcc = new DCC(client);

    client.addListener('error', function(message: string) {
        console.log('irc-err: ', message);
    });

    client.on('dcc-send', (from:string, args: DccArgs, message: string) => {
        console.log('received dcc request for file: ' + args.filename);
        const ws = fs.createWriteStream(path.join(getDownloadLocation(store.getState()),args.filename));
        dcc.acceptFile(from, args.host, args.port, args.filename,
            args.length, (err: string, filename: string, con: Socket) => {
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

    ipc.on('download', (event: any, {bot, pack}: {bot:string, pack:number}) => {
        connected.then(() => {
            client.say(bot, `xdcc send ${pack}`);
        });
    });
};
