'use strict';

const BaseService = require('../core/base_service');

class WechatUserService extends BaseService {
  async getUsers(userId, params) {
    const { page = 1 } = params;
    const wxApi = await this.getWxApi(userId);

    const wxUsers = await this.model.findAll({
      attributes: [ 'openid' ],
      offset: (page - 1) * this.pageSize,
      limit: this.pageSize,
    });
    const count = await this.model.count();

    const openid = wxUsers.map(item => item.openid)
    const lists = await wxApi.batchGetUsers(openid);

    return {
      lists: lists ? lists.user_info_list : [],
      count,
    };
  }

  get model() {
    return this.ctx.model.WechatUser;
  }
}

module.exports = WechatUserService;
