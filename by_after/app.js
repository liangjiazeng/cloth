var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var cloth_designerRouter = require('./routes/cloth_designerRouter');
var cloth_orderRouter = require('./routes/cloth_orderRouter');
var cloth_payRouter = require('./routes/cloth_payRouter');
var cloth_typeRouter = require('./routes/cloth_typeRouter');
var cloth_userRouter = require('./routes/cloth_userRouter');
var clothesRouter = require('./routes/clothesRouter');
var userAddressRouter = require('./routes/cloth_userAddress');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//设置跨域访问  
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});


app.use('/', index);
app.use('/users', users);
app.use('/designer', cloth_designerRouter);
app.use('/order', cloth_orderRouter);
app.use('/pay', cloth_payRouter);
app.use('/type', cloth_typeRouter);
app.use('/user', cloth_userRouter);
app.use('/clothes', clothesRouter);
app.use('/user_address', userAddressRouter);

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
