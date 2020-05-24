/*
 * @Description:项目配置 - 如果多配置文件会自动引入，只需要 NODE_ENV 的值和配置文件名称保持一致即可
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/19 14:57
 * @LastEditors: missagril
 */
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const modules = _Utils.AutoRequire.loadModules(__dirname, '.js');

module.exports = modules[env] || {};
