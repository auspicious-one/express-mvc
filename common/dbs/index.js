/*
 * @Description: 数据库表实例等的导出
 * @remark：也可以使用自动导入，处理一下函数传参就行
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/19 14:57
 * @LastEditors: missagril
 */

const Sequelize = require('sequelize');
const { mysql } = require('../../config/');

const UserInstance = require('./UserInstance');

//连接数据库
const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
  },
  timezone: mysql.timezone,
  dialectOptions: {},
  logging: _Utils.isDev, // 只在开发环境下输出MySql日志
});

module.exports = {
  UserInstance: UserInstance(sequelize),
  sequelize
};
