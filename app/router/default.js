'use strict';

/**
 * @param {Egg.Application} app - egg application
 *  controller.home.index controller文件夹下的home文件中的index方法
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.default.home.index);
  router.get('/getArtical', controller.default.home.getArtical);
  router.get('/getArticalById', controller.default.home.getArticalById);
};
