const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
    // entry:{
    //     venxxxder: ['react', 'react-dom'],
    //     bundleyyy: path.resolve(__dirname, '../src/main.js')
    // },
    entry: ['react', path.resolve(__dirname, '../src/main.js')],
    // entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: "js/[name]-[id]-[hash:8].js",
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    devServer: {
        // contentBase: path.resolve(__dirname, '../dist'),
        contentBase: path.resolve(__dirname, './'),
        port: 3838,
        host: '0.0.0.0',
        open: true,
        inline: true,
        compress: true,
        openPage: 'user',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|sx)$/,
                loader: 'babel-loader?cacheDirectory',
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpge|gif)$/,
                loader: 'file-loader?limit=4000&name=./images/[name]-[hash:8].[ext]'
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackCleanPlugin([path.resolve(__dirname, '../dist')]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../template.html')
        })
    ]
}