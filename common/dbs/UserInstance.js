/*
 * @Description: 定义User表
 * @remark: 这里没必要很详细，定义一下基本结构就行了。
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/19 14:57
 * @LastEditors: missagril
 */

const Sequelize = require('sequelize');

module.exports = sequelize => {
    return sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nickname: {
                type: Sequelize.STRING(20),
                allowNull: false,
                defaultValue: '',
                comment: '用户昵称'
            },
            password: {
                type: Sequelize.STRING(32),
                allowNull: false,
                defaultValue: '',
            },
            is_enabled: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 1,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            },
        },
        {
            tableName: 'user',
            timestamps: false,
        },
    );
};
