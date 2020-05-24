# express-mvc
### 基于 express 框架快速构建的 NodeJS - MVC 项目

#### 背景：作者算是重度ES6的使用者，而且之前是开发PHP，就按照以前的逻辑整理了一套MVC的初级封装（版本1.0.0，哈哈哈，后续会优化升级的）, 有问题可以直接联系我。

注意: 环境变量在windows 和 mac 上有不同，想兼容的话就下载插件吧。

目录结构：

![大致目录和文件结构](https://img-blog.csdnimg.cn/20200524170756593.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVmaXZlNQ==,size_16,color_FFFFFF,t_70)

```
├─common
│  ├─dbs                | 定义数据表
│  ├─language           | 输出的文字提示，区分语言
│  └─utils              | 工具函数
├─config                | 全局配置文件，按环境变量存放
├─script                | 脚本：项目的辅助脚本    
└─src
    ├─controller        | 控制器：存放业务逻辑
    ├─middleware        | 中间件
    ├─model             | 数据库操作的Model层
    ├─routes            | 路由配置
    └─views             | 页面
```
---

安装运行

npm
```
npm install && npm run dev
```

yarn
```
yarn && yarn run dev
```

Example

1. 页面访问：http://localhost:3000/user/index
2. 接口访问：http://localhost:3000/user/api/userList