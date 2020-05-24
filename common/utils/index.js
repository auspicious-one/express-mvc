/*
 * @Description: 工具函数，默认全局注入
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/19 14:57
 * @LastEditors: missagril
 */
const AutoRequire = require('../utils/AutoRequire');

class Utils {

    /**
     * 自动引入模块函数
     */
    static AutoRequire = AutoRequire;
    /**
     * 是否是开发环境
     * @type {boolean}
     */
    static isDev = process.env.NODE_ENV !== 'production';

    /**
     * 给输出加上pid识别是哪一个进程输出的
     * @private
     */
    static log = (...args) => {
        console.log(`pid：${process.pid}`, ...args);
    };

    /**
     * 延迟函数
     * @param time // 单位：秒
     * @returns {Promise<any>}
     */
    static sleep(time) {
        return new Promise(resolve => {
            const timer = setTimeout(() => {
                if (timer) clearTimeout(timer);
                resolve(true);
            }, time * 1000);
        });
    }
}

global._Utils = Utils;