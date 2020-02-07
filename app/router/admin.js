'use strict';
module.exports = app => {
    const { router, controller } = app;
    var adminauth = app.middleware.adminAuth()
    router.get('/admin', adminauth, controller.admin.main.index);
    router.post('/admin/checkLogin', controller.admin.main.checkLogin);
    router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
    router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
    router.post('/admin/updateArticle', adminauth, controller.admin.main.updateArticle);
}