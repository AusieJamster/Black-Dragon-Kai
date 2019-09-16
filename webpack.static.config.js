const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const path = require('path');
const basePath = path.resolve(__dirname);

module.exports = {

    context: basePath,

    entry: {
        landingApp: "./LandingPageApp.js",

    },

    output: {
        filename: "[name]-[chunkhash].js",
        chunkFilename: "[id].[chunkhash].bundle.js",
        publicPath: '/static/dist/',
        path: __dirname + "/dist"
    },

    resolve: {
        modules: [
            "node_modules"
        ]
    },

    devtool: "cheap-module-source-map",

    plugins: [

        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'static-index.html',
            template: '!!prerender-loader?string!static-index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "react",
                                [
                                    "env",
                                    { "modules": false }
                                ],
                                "stage-2"
                            ],
                            compact: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test:  /.(woff(2)?|eot|ttf)(\?[a-z0-9=\.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test: /.(svg)(\?[a-z0-9=\.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test:  /\.svgin$/,
                use: 'svg-inline-loader'
            }
        ]
    }

};