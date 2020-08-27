const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode:'production',
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname,'dist','js'),
        publicPath: './js/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/htmlTemplates/index.html',
            filename: './../index.html',
            chunks:[
                "app"
            ],
            minify: true,
            path: path.resolve(__dirname,'dist')
        }),
        new HtmlWebpackPlugin({
            template: './src/htmlTemplates/home.html',
            filename: './../home.html',
            chunks:[
                'home'
            ],
            minify: true,
            path: path.resolve(__dirname,'dist')
        })
    ]
});