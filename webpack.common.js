const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Template Project', // TODO: Customize the title
            template: './src/html/template.html',
        }),
    ],

    module: {
        rules: [
            // TODO: Do you need to load CSS?
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // TODO: Do you need to load images in HTML template?
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            // TODO: Do you need to load images in JavaScript?
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};