/*
 * @Description: 处理事务操作
 * @Doc: https://sequelize.org/v5/manual/transactions.html
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/4/30 14:41
 * @LastEditors: missagril
 */
const { sequelize } = require('../../common/dbs');

class DB {
  transaction = null;
  /**
   * 创建事务实例，这里补货异常，减少上层调用时要写的try-catch
   * @returns {Promise<*>}
   */
  startTransaction = async () => {
    try {
      if (!this.transaction) {
        this.transaction = await sequelize.transaction();
      }
      return this.transaction;
    } catch (e) {
      _Utils.log('事务创建失败：', e);
      return false;
    }
  };

  /**
   * 事务提交 ,放在try-catch中，所以不需要捕获异常
   * @returns {Promise<void>}
   */
  commit = async () => {
    await this.transaction.commit();
  };

  /**
   * 事务回滚 , 捕获异常，如果回滚失败，该事务会被挂起
   * @returns {Promise<void>}
   */
  rollback = async () => {
    try {
      await this.transaction.rollback();
    } catch (e) {
      _Utils.log('事务回滚失败：', e);
    }
  };
}

module.exports = DB;
