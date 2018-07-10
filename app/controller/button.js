'use strict';

const BaseController = require('../core/base_controller');

class ButtonController extends BaseController {
  async show(ctx) {
    const wxApi = await this.s.getWxApi(ctx.user.id);
    try {
      const result = await wxApi.getMenu();
      this.success(result.menu);
    } catch (e) {
      ctx.throw(500, e);
    }
  }

  async update(ctx) {
    const body = ctx.request.body;
    await this.model.upsert(body);

    this.success({ success: true });
  }

  get s() {
    return this.ctx.service.wechatConfig;
  }
}

module.exports = ButtonController;
