'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  get model() {
    return this.ctx.model[this.className];
  }

  get className() {
    return this.ctx.helper.className(this, 'Service');
  }
}

module.exports = BaseService;
