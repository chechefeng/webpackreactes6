/**
 * Created by lpw on 2017/7/25.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
module.exports = {
    devtool: 'source-map',
    entry: {
        // index: './src1/index.jsx',
        index: './redux/index.jsx',
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
                use: extractCSS.extract([
                    {
                    loader:'css-loader',
                    options: {importLoaders: 1}
                },
                    {
                        loader:'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: [
                               // require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')(), //CSS浏览器兼容
                                require('cssnano')()  //压缩css
                            ]

                        }
                    }
                    ])
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            },



            // {
            //
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ],
            //
            // },
            // {
            //     test: /\.less$/,
            //
            //      use: ["style-loader" ,"css-loader","less-loader"] // compiles Less to CSS
            //
            // },


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
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader", // Do not use "use" here

            }
        ]

    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.web.js', '.jsx', '.json', '.coffee','.js']
    },
    plugins: [
        extractCSS,
        extractLESS,

        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            //filename: './index.html', //生成的html存放路径，相对于 path
            template: './index.html', //html模板路径
            hash: true,    //为静态资源生成hash值
        })//引用模板
    ]
};


// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
// const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
//
// module.exports = {
//     entry: {
//         index: './src/index.jsx',
//     },
//     devServer: {
//
//         contentBase: "./dist",//本地服务器所加载的页面所在的目录
//         historyApiFallback: true,//不跳转
//         inline: true,//实时刷新
//         port: 8080,//设置默认监听端口，如果省略，默认为"8080"
//
//     },
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//
//
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: extractCSS.extract([
//                     {
//                         loader: 'css-loader',
//                         options: {importLoaders: 1}
//                     },
//                     {
//                         loader: 'postcss-loader',
//                         options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
//                             plugins: [
//                                 // require('postcss-import')({root: loader.resourcePath}),
//                                 require('autoprefixer')(), //CSS浏览器兼容
//                                 require('cssnano')()  //压缩css
//                             ]
//
//                         }
//                     }
//                 ])
//             },
//             {
//                 test: /\.less$/i,
//                 use: extractLESS.extract(['css-loader', 'less-loader'])
//             },
//             // {
//             //     test: /\.css$/,
//             //     use: [ 'style-loader', 'css-loader' ]
//             // },
//             // {
//             //     test: /\.less$/,
//             //     use: [{
//             //         loader: "style-loader" // creates style nodes from JS strings
//             //     }, {
//             //         loader: "css-loader" // translates CSS into CommonJS
//             //     }, {
//             //         loader: "less-loader" // compiles Less to CSS
//             //     }]
//             // },
//             {
//                 test: /\.(svg)$/i,
//                 loader: 'svg-sprite-loader',
//                 include: [
//                     require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
//                 ]
//             },
//             {
//                 test: /\.jsx$/,
//                 loader: "babel-loader", // Do not use "use" here
//                 options: {
//                     // ...
//                     plugins: [
//                         ["import", [{"style": "css", "libraryName": "antd-mobile"}]]
//                     ],
//                     presets: ['react', 'es2015', "stage-1"]
//                 }
//             }, {
//                 test: /\.(woff|svg|eot|ttf)\??.*$/,
//                 loader: "url-loader", // Do not use "use" here
//
//             }
//         ]
//
//     },
//     resolve: {
//         modules: ['node_modules', path.join(__dirname, '../node_modules')],
//         extensions: ['.web.js', '.jsx', '.json', '.coffee', '.js']
//     },
//     plugins: [
//         extractCSS,
//         extractLESS,
//
//         //new HtmlWebpackPlugin()//引用模板
//     ]
// };