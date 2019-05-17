const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(), 
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8081,
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
});