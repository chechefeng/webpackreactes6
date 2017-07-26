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
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite-loader',
                include: [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
                ]
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader", // Do not use "use" here
                options: {
                    // ...
                    plugins: [
                        ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
                    ],
                    presets: ['react', 'es2015',"stage-1"]
                }
            }
        ]

    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.web.js', '.jsx', '.json', '.coffee','.js']
    }
};