'use strict';

const BaseService = require('../core/base_service');
const WxApi = require('../lib/wx/WxApi');

class WechatConfigService extends BaseService {

  async getConfigByUserId(userId) {
    return await this.model.findOne({ where: { userId } });
  }

  async getWxApi(userId) {
    const wechatConfig = await this.getConfigByUserId(userId);
    if (wechatConfig === null) this.ctx.throw(500, '尚未配置公众号');

    return WxApi(wechatConfig);
  }

  async getFollowers(userId) {
    const wxApi = await this.getWxApi(userId);
    return await wxApi.getFollowers();
  }

  get model() {
    return this.ctx.model.WechatConfig;
  }
}

module.exports = WechatConfigService;
