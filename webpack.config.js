module.exports = {
    devServer: {
        contentBase: "./",
        proxy: {
            '/feed': {
                target: 'http://horriblesubs.info/rss.php?res=all',
                changeOrigin: true,
                pathRewrite: {'^/feed' : ''},
            }
        }
    }
};