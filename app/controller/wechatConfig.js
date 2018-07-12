'use strict';

const BaseController = require('../core/base_controller');

class WechatConfigController extends BaseController {
  async show(ctx) {
    const userId = ctx.user.id;
    const data = await this.s.getConfigByUserId(userId);
    this.success(data);
  }

  async update(ctx) {
    const body = ctx.request.body;
    body.userId = ctx.user.id;
    await this.model.upsert(body);

    this.success({ success: true });
  }
}

module.exports = WechatConfigController;
