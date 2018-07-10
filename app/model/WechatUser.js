'use strict';

const decamelize = require('decamelize');

const BaseModel = require('../lib/model/BaseModel');

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // 继承 BaseModel
  class WechatUser extends BaseModel {
    // coding...
  }
  // 将 Admin 注入 app.model 中,利用  Sequelize.Model 的 init 方法
  WechatUser.init({
    nickname: STRING(32),
    age: INTEGER,
    registerAt: DATE,
  }, {
    sequelize: app.model,
  });

  // WechatUser.beforeDefine((attributes, options) => {
  //   console.log(123)
  //   if (options) {
  //     // eslint-disable-next-line no-param-reassign
  //     options.tableName = decamelize(options.modelName);
  //   }
  // });

  return WechatUser;
}
