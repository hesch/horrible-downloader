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
                            '@babel/preset-typescript',
                            ['@babel/preset-stage-2', {
                                decoratorsLegacy: true
                            }]
                        ],
                        plugins: []
                    }
                }
            },

        ]
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