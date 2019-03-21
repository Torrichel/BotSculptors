'use strict';

const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
        template: __dirname + '/app/index.html',
        filename: 'index.html',
        inject: 'body'
    });

const ExtractTextPlugin = require('extract-text-webpack-plugin');






module.exports = {
    entry: [__dirname + '/app/store.js', __dirname + '/app/styles/index.scss'],
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
            },
            {
                test: /\.(jpg|ttf|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        },
                    },
                ]
            }

        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        HTMLWebpackPluginConfig, new ExtractTextPlugin('styles/styles.css', {
            allChunks: true
        })
    ],
    devServer: {
        historyApiFallback: true
    }

};
