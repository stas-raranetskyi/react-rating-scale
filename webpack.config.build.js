const path = require('path');
const config = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                            options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            }
        ]
    }
}

module.exports = config;
