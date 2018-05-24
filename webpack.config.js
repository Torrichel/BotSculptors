'use strict';

let HTMLWebpackPlugin = require('html-webpack-plugin'),
    HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
        template: __dirname + '/app/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [__dirname + '/app/store.js', __dirname + '/app/styles/main.scss'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }

        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build',
        publicPath: '/'
    },
    plugins: [
        HTMLWebpackPluginConfig, new ExtractTextPlugin('styles/main.css', {
            allChunks: true
        })
    ],
    devServer: {
        historyApiFallback: true
    }

};

































