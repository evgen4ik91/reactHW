const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MinifyPlugin()
    ]
});