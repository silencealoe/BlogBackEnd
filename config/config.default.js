/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574145619864_9316';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'blogdata',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    // 是否防御csrf攻击
    csrf: { enable: false },
    // 域白名单
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    // 只允许http://localhost:3000访问
    origin: 'http://localhost:3000',
    // 开启认证
    credentials: true,
    // 允许的请求方式
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',                                                  
  };

  return {
    ...config,
    ...userConfig,
  };
};
