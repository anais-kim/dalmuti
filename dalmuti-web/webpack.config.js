var path = require('path');
var webpack = require('webpack')
var appPath = process.cwd();

module.exports = {
    entry: path.join(appPath, 'src/index.js'),
    output: {
        path: path.join(appPath, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(appPath, 'public'),
        port: 7777,
        inline: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /(\.css)|(\.scss)$/,
                include: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },

                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /(\.css)|(\.scss)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /(\.png)|(\.svg)|(\.jpg)/,
                use: ['url-loader']
            }
        ]
    }
};