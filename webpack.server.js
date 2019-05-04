const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: './src/serverRenderer.js',
    externals: [nodeExternals()],
    mode: 'production',
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2',
    }
});