var express = require('express');
//用于处理文件路径
var path = require('path');
//中间件，用于请求网页的logo。
var favicon = require('serve-favicon');
//morgan是express默认的日志中间件，也可以脱离express，作为node.js的日志组件单独使用。
var logger = require('morgan');
//中间件，解释Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象
var cookieParser = require('cookie-parser');
//bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
var bodyParser = require('body-parser');

var user = require('./server/routes/user');

var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/myapp';

mongoose.Promise = global.Promise;
//连接
mongoose.connect(DB_URL, {useMongoClient: true,});

//连接成功
mongoose.connection.on('connected', function () {    
    console.log('链接成功 ' + DB_URL);
});    

//连接异常
mongoose.connection.on('error',function (err) {    
    console.log('链接异常: ' + err);  
});    
 
//连接断开
mongoose.connection.on('disconnected', function () {    
    console.log('断开链接');  
});  


var app = express();

if (process.env.NODE_ENV !== 'production') {
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');
    var webpackCompiled = webpack(webpackConfig);
    // 配置运行时打包
    var webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(webpackCompiled, {
        publicPath: webpackConfig.output.publicPath,
        stats: {colors: true},
        lazy: false,
        watchOptions: {
            poll: true
        },
    }));

    // 配置热更新
    var webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(webpackCompiled));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//设置 /public/imgs/logo.ico 为 favicon 图标。
app.use(favicon(path.join(__dirname, 'public/imgs', 'logo.ico')));
//加载日志中间件
app.use(logger('dev'));
//添加json解析器 
app.use(bodyParser.json());
//extended为false表示使用querystring来解析数据，这是URL-encoded解析器  
app.use(bodyParser.urlencoded({ extended: true }));
//处理每一个请求的cookie
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置跨域访问    
app.all('*',function(req, res, next) {    
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");    
    res.header("X-Powered-By",' 3.2.1')    
    res.header("Content-Type", "application/json;charset=utf-8"); 
    next();    
}); 

app.use('/api', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;