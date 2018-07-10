'use strict';

const BaseController = require('../core/base_controller');

class UserController extends BaseController {
  async login(ctx) {
    // const { username, password } = ctx.request.body;
    const data = await this.s.login(ctx.request.body);
    this.success(data);
  }
}

module.exports = UserController;
