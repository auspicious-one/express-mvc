/*
 * @Description: 项目入口以及配置
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/19 14:57
 * @LastEditors: missagril
 */
'use strict';
const express = require('express');
const consolidate = require('consolidate');
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

// 启动gzip压缩
const compression = require('compression');

// 操作日期
const moment = require('moment');

// 引入工具类
require('./common/utils');

// 引入中间件模块
const { RequestLogsMiddleware } = require('./src/middleware/');

// 引入路由模块
const api = require('./src/routes/');

app.use(compression());
app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set("views", "./src/views");

//自动将body请求数据格式转成json
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// 统一获取请求头, 通过req.[_headername]来获取
app.use('*', function (req, res, next) {
    req._version = req.headers['version'] || '1.4.0';
    req._platform = req.headers['systemname'] || 'android';
    req._auth = req.headers['authorization'] || '';
    req._lang = req.headers['accept-language'] || 'zh';
    req._ip =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    req._pathname = req.baseUrl.toLowerCase();
    next();
});

// 中间件
app.use('/*', RequestLogsMiddleware.handle);

// 路由
app.use('/', api);

// 500 的处理
app.use((error, req, res, next) => {
    res.status(500).render('500.html', {
        error,
        ipv4_address: req._ip
    })
})

app.listen(PORT);

console.log(
    '%s | node server initializing | listening on port %s | process id %s | NODE_ENV is %s ',
    moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
    PORT,
    process.pid,
    process.env.NODE_ENV,
);