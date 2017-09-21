var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/myapp';

//连接
mongoose.connect(DB_URL, {useMongoClient: true,});

//连接成功
mongoose.connection.on('connected', function () {
    console.log('connect success ' + DB_URL);  
});

//连接异常
mongoose.connection.on('error',function (err) {    
    console.log('connect error: ' + err);  
});    

//连接断开
mongoose.connection.on('disconnected', function () {    
    console.log('disconnect');  
});



var app = express();

if (process.env.NODE_ENV !== 'production') {
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');
    var webpackCompiled = webpack(webpackConfig);
    // 配置运行时打包
    var webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(webpackCompiled, {
        publicPath:webpackConfig.output.publicPath,
        stats: {colors: true},
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
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

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置跨域访问,在app.use('/api', user);前添加
app.all('*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/', index);
app.use('/users', users);

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
