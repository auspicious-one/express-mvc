/*
 * @Description: 数据表模型同步 ，逐个同步，其他配置参见Doc
 * @remark：https://sequelize.org/v5/manual/models-definition.html
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/19 14:57
 * @LastEditors: missagril
 */

require('../common/utils');

const DbsInstance = require('../common/dbs');

(async () => {
    await Promise.all(
        Object.keys(DbsInstance).map(item => {
            if (item.endsWith('Instance')) {
                return DbsInstance[item].sync({
                    force: false // force:true 是先删除表再同步，建议不要用
                })
            }
        })
    )

    console.log('Notice：Success and process exit!!!');
    
    process.exit(0);
})().catch(e => {
    console.error(e);
});