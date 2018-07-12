'use strict';
const bcrypt = require('bcrypt');
// const uuid = require('node-uuid');
const jwt = require('jsonwebtoken');

const BaseService = require('../core/base_service');

class UserService extends BaseService {
  async login(data) {
    const { username, password } = data;
    const user = await this.model.findOne({ where: { username } });

    if (user === null) this.ctx.throw(500, '用户不存在'); // throw new Error('用户不存在');
    if (!bcrypt.compareSync(password, user.password)) this.ctx.throw(500, '用户名密码错误'); // throw new Error('用户名密码错误');

    const accessToken = jwt.sign(user.dataValues, this.ctx.app.config.JWT_SECRET, { expiresIn: '1d' });

    user.lastSignInAt = new Date();
    await user.save();
    const response = {
      user,
      accessToken,
    }
    return response;
  }
}

module.exports = UserService;
