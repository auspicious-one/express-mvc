/*
 * @Description: 自动导入文件Module
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/5/11 14:08
 * @LastEditors: missagril
 */
const fs = require('fs');

class AutoRequire {
  /**
   * 自动加载Modules
   * @param dirName
   * @param endStr
   * @param fileModules
   * @param ignoreFiles
   */
  static loadModules(
    dirName = '',
    endStr = '',
    fileModules = {},
    ignoreFiles = [],
  ) {
    try {
      const js_files = fs
        .readdirSync(dirName)
        .filter(f => !!f.endsWith(endStr) && !ignoreFiles.includes(f));

      for (let f of js_files) {
        fileModules[f.substring(0, f.length - 3)] = require(dirName + '/' + f);
      }
    } catch (e) {
      _Utils.log('自动加载模块异常：', e);
      process.exit(0);
    }

    return fileModules;
  }
}

module.exports = AutoRequire;
