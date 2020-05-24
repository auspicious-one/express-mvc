/*
 * @Description: example:请求日志中间件
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/12 17:53
 * @LastEditors: missagril
 */

class RequestLogsMiddleware {
  /**
   * 处理中间件逻辑
   * @param req
   * @param res
   * @param next
   * @returns {Promise<void>}
   */
  static handle = (req, res, next) => {
    console.log(req._pathname);
    next();
  }
}

module.exports = RequestLogsMiddleware;
