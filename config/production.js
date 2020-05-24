/*
 * @Description: 生产环境配置
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/19 14:57
 * @LastEditors: missagril
 */
module.exports = {
  mysql: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'tmmall',
    timezone: '+08:00',
    charset: 'utf8mb4',
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
  }
};

