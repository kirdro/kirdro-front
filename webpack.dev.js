const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        disableHostCheck: true,
        historyApiFallback: true,
        inline: true,
        host: '0.0.0.0',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
});