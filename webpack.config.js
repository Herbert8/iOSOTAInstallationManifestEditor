
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');


module.exports = {
    entry: './src/app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' //添加对样式表的处理
            },
            {
                test: /\.(eot|woff)$/,
                loader: "file-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: ['shared.js']
        }),
        new HtmlWebpackPlugin({
            template: './src/index_template.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                // collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true
            },
            myKey: "myKeyTest" //自定义值，页面中通过 <%= htmlWebpackPlugin.options.myKey %> 访问
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     }
        // }),
        new CleanObsoleteChunks()
    ]
};