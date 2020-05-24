/*
 * @Description: 统一的路由导出
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/9 15:56
 * @LastEditors: missagril
 */
const DB = require('./DB');

module.exports = _Utils.AutoRequire.loadModules(__dirname, 'Model.js', { DB }, [
  'BaseModel.js',
]);
