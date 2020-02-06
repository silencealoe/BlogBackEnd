'use strict';
module.exports = app => {
    const { router, controller } = app;
    var adminauth = app.middleware.adminAuth()
    router.get('/admin', adminauth, controller.admin.main.index);
    router.post('/checkLogin', controller.admin.main.checkLogin);
    router.get('/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
}