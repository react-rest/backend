'use strict';
const moment = require('moment');
const WechatAPI = require('co-wechat-api');

module.exports = wechatConfig => {
  const api = new WechatAPI(wechatConfig.appId, wechatConfig.secret, async () => {
    if (wechatConfig.token) {
      // console.log('token', wechatConfig.token);
      try {
        const token = JSON.parse(wechatConfig.token)
        if (moment().valueOf() < moment(token.expireTime).valueOf()) return token;
        return '';
      } catch (e) {
        return '';
      }
    }
    return '';
  }, async token => {
    wechatConfig.token = JSON.stringify(token);
    await wechatConfig.save();
  });
  return api;
}
