# webpackreactes6
webpackreactes6 <br> 
1.创建自己的工程webpackreactes6<br> 
2 cd到 webpackreactes6<br> 
3 npm init初始化生成package.json文件<br> 
4 安装webpack:npm install webpack --save-dev,<br> 
5 安装webpack-dev-server:npm install webpack-dev-server --save-dev,<br> 
6 安装react核心文件npm install react react-dom --save-dev，<br> 
7 ES2015转码规则 npm install --save-dev babel-preset-es2015<br> 

8 react转码规则 npm install --save-dev babel-preset-react<br> 

9 ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个 npm install --save-dev babel-preset-stage-0<br> 
10 引入蚂蚁金服库<br> 
npm install antd-mobile --save
npm install babel-plugin-import --save-dev
11 安装less css ,loader<br> 
npm i style-loader css-loader less less-loader svg-sprite-loader--save-dev<br> 
12 设置 webpack 的 resolve 来自动区分 web & native 组件加载。<br> 
webpack1的写法<br> <br> 
resolve: {
  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
  extensions: ['', '.web.js', '.js', '.json'],
},<br> 
webpack3的写法<br> 
resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.web.js', '.jsx', '.json', '.coffee','.js']
    }<br> 
