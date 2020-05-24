/*
 * @Description: 用户相关
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/7 17:52
 * @LastEditors: missagril
 */
const BaseController = require('./BaseController');

const { UserModel } = require('../model/');

class UserController extends BaseController {
  /**
   * 展示用户列表
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  static index = async (req, res, next) => {
    const userModel = new UserModel();
    try {
      const userList = await userModel.getUserList();

      res.render('index.html', {
        userList
      });
    } catch (e) {
      next(e);
    }
  };

  /**
   * 获取用户列表接口
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  static userList = async (req, res) => {
    const userModel = new UserModel();
    try {

      const userList = await userModel.getUserList();

      this.handleSuccess(res, userList);
    } catch (e) {
      this.handleError(req, res, e.toString());
    }
  };
}

module.exports = UserController;
