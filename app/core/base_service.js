'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  async getWxApi(userId) {
    return await this.ctx.service.wechatConfig.getWxApi(userId);
  }

  get model() {
    return this.ctx.model[this.className];
  }

  get className() {
    return this.ctx.helper.className(this, 'Service');
  }

  get pageSize() {
    return 2;
  }
}

module.exports = BaseService;
