const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist','js'),
        publicPath: '/js/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/htmlTemplates/index.html',
            filename: './../index.html',
            chunks:[
                "app"
            ],
            minify: false,
            path: path.resolve(__dirname,'dist'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackPlugin({
            template: './src/htmlTemplates/home.html',
            filename: './../home.html',
            chunks:[
                "home"
            ],
            minify: false,
            path: path.resolve(__dirname,'dist'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: "/js/",
        compress: true,
        port: 9000,
        hot: true
    }
});