const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    source: path.join(__dirname, 'src'),
    docs: path.join(__dirname, 'docs'),
};

const config = {
    entry: `${PATHS.source}/index.js`,
    output: {
        path: PATHS.docs,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.html'
        }),
    ]
}

module.exports = config;
