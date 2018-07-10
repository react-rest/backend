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
    // await this.ctx.model.WechatConfig.create(
    //   {
    //     appId: 'wx247b0636a8c6b089',
    //     secret: '83dc5322d368b15e442ed63b3e31057f',
    //     userId: 1,
    //   }
    // );
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
