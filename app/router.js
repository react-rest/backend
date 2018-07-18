'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login', controller.user.login);
  router.post('/api/register', controller.user.register);
  router.resources('users', '/api/users', controller.user);
  router.resources('posts', '/api/posts', controller.post);
  router.get('wxConfig', '/api/wxConfig', controller.wechatConfig.show);
  router.post('wxConfig', '/api/wxConfig', controller.wechatConfig.update);
  router.get('wxUser', '/api/wx/users', controller.wechatUser.users);
  router.get('wxUser', '/api/wx/users/:openid', controller.wechatUser.user);
  router.get('button', '/api/button', controller.button.show);
  router.post('button', '/api/button', controller.button.update);
};
