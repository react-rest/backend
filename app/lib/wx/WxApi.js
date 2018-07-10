'use strict';
const WechatAPI = require('co-wechat-api');

module.exports = (wechatConfig) => {
  const api = new WechatAPI(wechatConfig.appId, wechatConfig.secret, async () => {
    if (wechatConfig.token) {
      return JSON.parse(wechatConfig.token);
    }
    return '';
  }, async token => {
    wechatConfig.token = JSON.stringify(token);
    await wechatConfig.save();
  });
  return api;
}
