'use strict';

const camelcase = require('camelcase');
const Controller = require('egg').Controller;

class BaseController extends Controller {
  async index() {
    // const wxApi = await this.ctx.service.wechatConfig.getWxApi(1);
    // try {
    //   const result = await wxApi.getMenu();
    //   console.log('result', result);
    // } catch (e) {
    //   console.log('e-->', e);
    // }
    // this.ctx.throw(500, 'error...')
    await this.ctx.model.WechatUser.bulkCreate([
      {
        openid: 'opseys1e70elMUXCG9O4tJCoXizI',
        nickname: '峰',
      },
      {
        openid: 'opseys1dI61C3UrmD62BQ-1rtVVw',
        nickname: '缇香',
      },
      {
        openid: 'opseys4GekFkkQWbFSBfe2kLJTnc',
        nickname: '心不狠，站不稳',
      },
    ]);
    const lists = await this.model.findAll();
    this.success(lists);
  }

  async new() {
    this.ctx.body = `new ${this.className}`;
  }

  async create() {
    console.log('data', this.ctx.request.body)
    this.ctx.body = `create ${JSON.stringify(this.ctx.request.body)}`;
  }

  async show() {
    const { id } = this.ctx.params
    const info = await this.model.findById(id);
    this.success(info);
    // this.ctx.body = info || {};
  }

  async edit() {
    this.ctx.body = `edit ${this.className}`;
  }

  async update() {
    this.ctx.body = `update ${this.className}`;
  }

  async destroy() {
    this.ctx.body = `destroy ${this.className}`;
  }

  success(data) {
    this.ctx.body = data;
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }

  async getWxApi(userId) {
    return await this.ctx.service.wechatConfig.getWxApi(userId);
  }

  get s() {
    return this.ctx.service[camelcase(this.className)];
  }

  get model() {
    return this.ctx.model[this.className];
  }

  get className() {
    return this.ctx.helper.className(this, 'Controller');
  }
}

module.exports = BaseController;
