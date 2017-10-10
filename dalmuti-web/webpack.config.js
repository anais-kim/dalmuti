var path = require('path');
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
        inline: true
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /(\.png)|(\.svg)/,
                use: ['url-loader']
            }
        ]
    }
};