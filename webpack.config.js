const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            ['@babel/preset-stage-2', {
                                decoratorsLegacy: true
                            }]
                        ],
                        plugins: []
                    }
                }
            },
            {
                test: /\.tsx?/,
                exclude: /(node_modules|bower_components)/,
                use: ['awesome-typescript-loader'],
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        contentBase: "./",
        proxy: {
            '/feed': {
                target: 'http://horriblesubs.info/rss.php?res=all',
                changeOrigin: true,
                pathRewrite: {'^/feed': ''},
            }
        }
    }
};