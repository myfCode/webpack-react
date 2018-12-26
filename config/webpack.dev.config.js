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
                loader: ['style-loader','css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ]
                            }),
                            require('postcss-cssnext')(),
                            require('cssnano')(),
                            require('postcss-pxtorem')({
                                rootValue: 75,
                                unitPrecision: 5,
                                minPixelValue: 10,
                                propList: ['*']
                            })
                            // rootValue为75，说是对根元素大小进行设置。可能类似px2rem中的remUnit参数吧
                            // unitPrecision为5，起初我真不知道这个官方说的The decimal numbers to allow the REM units to grow to.是啥意思，搞了半天才观察出来，原来是转换成rem后保留的小数点位数。。。
                            // propList是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']意思是排除带有border的属性，当然这里会有一个问题，也许有时候不想对border其他样式处理例如border-radius所以也不是很好。
                            // selectorBlackList则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
                            // minPixelValue是一个非常不错的选项，我设置了12，意思是所有小于12px的样式都不被转换，那么border之类的属性自然会保留px值了。而刚才提到的border-radius如果为了创造圆形等特殊较大圆弧时则还是会转换成rem，来配合对应的width和height（当然，你也可以用继承width或者height的变量来设置radius）。
                        ]
                    }
                }]
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