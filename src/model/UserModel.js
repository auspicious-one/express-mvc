/*
 * @Description: 用户账户Model
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/7 11:01
 * @LastEditors: missagril
 */
const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {
    /**
     * 构造函数，实例化当前Model
     * @param {*} transaction // 事务实例
     */
    constructor(transaction = null) {
        super();
        if (transaction) {
            this.transaction = transaction;
        }
        this.modelInstance = this.dbsInstance.UserInstance;
    }

    /**
     * 获取用户列表
     */
    getUserList = async () => {
        const result = await this.modelInstance.findAll({});

        return this.handleResponse(result);
    }
}

module.exports = UserModel;
