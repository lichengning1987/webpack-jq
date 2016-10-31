var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app:path.join(__dirname, './resource/js/index/index1'),
        app1:path.join(__dirname, './resource/js/index/index2'),
        subIndex:path.join(__dirname, './resource/js/index/subIndex'),
        jquery:['./resource/js/plug/jquery-1.11.0.min.js'],
        bootstrap:['./resource/js/plug/plug.js'],
    },
    output: {
        path: path.join(__dirname, './resource/js/build'),
        filename: '[name].js'
    },
    plugins: [
        // kills the compilation upon an error.
        // this keeps the outputed bundle **always** valid
        //new webpack.NoErrorsPlugin(),
        //这个使用uglifyJs压缩你的js代码
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //new CommonsChunkPlugin({name:'jquery',minChunks:Infinity})
        //提取app,app1中引用的公共js
        new CommonsChunkPlugin({name:'common',chunks: ['app', 'app1']}),
        //压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //生成html文件
        /*new HtmlwebpackPlugin({
            title: 'Hello World app'
        })*/

    ]
};
