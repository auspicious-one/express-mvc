/*
 * @Description: 控制器基类
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/9 11:05
 * @LastEditors: missagril
 */
const language = require('../../common/language');

class BaseController {
  /**
   * 记录错误日志以及抛出异常
   * @param req
   * @param res
   * @param error
   * @param message
   * @param errorCode
   */
  static handleError = (
    req,
    res,
    error = '',
    message = '',
    errorCode = 1001,
  ) => {
    if (error) {
      _Utils.isDev ? this.log(error) : _Utils.logger(error);
    }
    this.error(req, res, errorCode, message);
  };

  /**
   * 成功的返回信息
   * @param res
   * @param data
   * @param message
   * @param error_code
   */
  static handleSuccess = (
    res,
    data = {},
    message = '',
    error_code = 0,
  ) => {
    this.success(res, data || {}, message, error_code);
  };

  /**
   * 接口成功结果
   * @param res
   * @param data
   * @param message
   * @param error_code
   */
  static success = (
    res,
    data = {},
    message = '',
    error_code = 0,
  ) => {
    res.json({ error_code, message, data });
  };

  /**
   * 接口失败结果
   * @param req
   * @param res
   * @param error_code
   * @param message
   * @param data
   */
  static error = (req, res, error_code = 1001, message = '', data = {}) => {
    // 这里的语言配置要依据 language 导出的 module 进行指定
    const lang = req._lang.toLowerCase().indexOf('zh') !== -1 ? 'zh' : 'en';

    res.json({
      error_code,
      message: message
        ? message
        : language[lang].hasOwnProperty(error_code)
          ? language[lang][error_code]
          : '',
      data,
    });
  };

  /**
   * 输出日志
   * @param args
   */
  static log = (...args) => {
    console.log(`pid：${process.pid}`, ...args);
  };
}

module.exports = BaseController;
