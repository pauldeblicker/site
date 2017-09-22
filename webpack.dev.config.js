'use strict';

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');

module.exports = {
    context: `${process.cwd()}/client`,
    devServer: {
        host: '0.0.0.0',
        port: 3001,
        proxy: {
            '*': 'http://localhost:3000',
        },
    },
    devtool: 'eval-source-map',
    entry: {
        app: './index.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'raw-loader',
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
            {
                test: /\.(eot|jpg|svg|ttf)$/,
                use: {
                    loader: 'file-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'}, 
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ],
            },
        ],
    },
    output: {
        path: `${process.cwd()}/dist`,
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                keep_fnames: true,
                warnings: false,
            },
            mangle: false,
        }),
        new CopyWebpackPlugin([{
            from: `${process.cwd()}/client`,
        }]),
        new SvgStore({
            svgoOptions: {
                plugins: [
                    {removeTitle: true},
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            'project': process.cwd(),
        },
    },
};

