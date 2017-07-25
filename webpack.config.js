/**
 * Created by lpw on 2017/7/25.
 */
var path = require('path');


module.exports = {
    entry: {
        index: './src/index.jsx',
    },
    devServer: {

        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"

    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {


        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader", // Do not use "use" here
                options: {
                    // ...
                    presets: ['react', 'es2015',"stage-1"]
                }
            }
        ]

    },
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee']
    }
};