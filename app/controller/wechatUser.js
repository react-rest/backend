'use strict';

const BaseController = require('../core/base_controller');

class WechatUserController extends BaseController {
  async users(ctx) {
    const data = await this.s.getUsers(ctx.user.id, ctx.params);
    this.success(data);
  }

  async user(ctx) {
    console.log('this.params', ctx.query);
  }
}

module.exports = WechatUserController;
