const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app :'./src/js/app.js',
        home :'./src/js/home.js'
    },
    plugins:[
        new CleanPlugin.CleanWebpackPlugin()
    ],
    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         } 
            //     }
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[hash].[ext]',
                            outputPath: './../assets/',
                            publicPath: './assets/'
                        }
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            
        ]
    }
};