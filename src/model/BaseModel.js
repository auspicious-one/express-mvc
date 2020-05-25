/*
 * @Description: Model
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020-04-28 18:43:13
 * @LastEditors: Auspicious
 * @LastEditTime: 2020-05-25 14:39:45
 */
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const DbsInstances = require('../../common/dbs/');

class BaseModel {
  modelInstance = null; // 当前调用对象的表实例
  transaction = null; // 事务实例
  updateThrowException = true; // 未更新是否抛出异常
  dbsInstance = DbsInstances; // 所有的数据库实例
  Op = Op;

  /**
   * 重置事务实例
   * 用于在特定的操作不需要事务但是后面有引入的情况
   * @param transaction
   */
  updateTransaction = (transaction = null) => {
    if (transaction) {
      this.transaction = transaction;
    }
  };

  /**
   * 修改变量：未修改时是否抛出异常
   * 链式调用
   * @param updateThrowException
   * @returns {BaseModel}
   */
  updateThrow(updateThrowException = true) {
    this.updateThrowException = updateThrowException;
    return this;
  }

  /**
   * 重写Update方法，根据设置判断是否抛出未更新的异常(因为Sequelize未更新返回的是[0])
   * @param update_data
   * @param options
   * @returns {Promise<boolean>}
   */
  async update(update_data = {}, options) {
    const result = await this.modelInstance.update(update_data, options);
    if (result && result[0] === 0) {
      if (this.updateThrowException) {
        throw 'None Update';
      }
      return false;
    }

    return true;
  }

  /**
   * 针对options添加额外通用操作函数 , 按需增加参数
   * @param options
   * @param needTransaction 是否需要追加交易
   * @param needOrm 是否获取Orm对象或者只获取数据结果集
   */
  handleOptions(options = {}, needTransaction = true, needOrm = false) {
    if (this.transaction && needTransaction) {
      options.transaction = this.transaction;
    }

    options.raw = needOrm;

    return options;
  }

  /**
   * 处理返回值为JSON - 读文档发现可以直接在 options 里设置 raw = true;
   * @param result
   * @param needParse
   * @returns {Object|Array}
   */
  handleResponse(result, needParse = true) {
    // if (result) {
    //   if (Array.isArray(result) || needParse) {
    //     return JSON.parse(JSON.stringify(result));
    //   }
    //   return result.toJSON();
    // }
    return result;
  }

  /**
   * 根据UserID横向分表
   * @param tableName
   * @param userID
   */
  subTableByUserID(tableName, userID) {
    this.modelInstance.tableName = tableName + userID % 10;
  }

  /**
   * 批量创建模糊查询条件
   * @param filed
   * @param where
   * @returns {{}}
   */
  createSearchCondition = (filed = [], where) => {
    if (filed.length > 0 && where) {
      const or = filed.map(item => {
        return {
          [item]: {
            [Op.like]: `%${where}%`,
          },
        };
      });
      return { [Op.or]: or };
    }
    return null;
  };
}

module.exports = BaseModel;
