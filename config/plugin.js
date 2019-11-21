'use strict';

/** @type Egg.EggPlugin */
// 数据库
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 跨域
exports.cors = {
  // 是否开启此插件
  enable: true,
  package: 'egg-cors',
};

