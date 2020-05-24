/*
 * @Description: 用户相关路由
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/9 15:55
 * @LastEditors: missagril
 */
const express = require('express');
const router = express.Router();
const { UserController } = require('../controller/');

// 用户登录
router.get('/index', UserController.index);

router.get('/api/userList', UserController.userList);

module.exports = router;
