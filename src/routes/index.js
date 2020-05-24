/*
 * @Description: 统一的路由导出
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/9 15:56
 * @LastEditors: missagril
 */
const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');

router.use('/user', UserRoutes);

router.use((req, res) => {
    res.status(404).send({
        error_code: 404,
        message: '404 , 请求地址不存在！',
        data: {},
    });
});

module.exports = router;