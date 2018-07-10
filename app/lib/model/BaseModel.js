'use strict';
const decamelize = require('decamelize');
const Sequelize = require('sequelize');

class BaseModel extends Sequelize.Model {
  constructor(values, options) {
    super(values, options);
    console.log('values', values);
    console.log('options', options);
  }

  static init(attributes, options) {
    // options.tableName = decamelize(options.modelName);
    super.init(attributes, options);
  }

}
//
// BaseModel.beforeDefine((attributes, options) => {
//   if (options) {
//     // eslint-disable-next-line no-param-reassign
//     options.tableName = decamelize(options.modelName);
//   }
// });

module.exports = BaseModel;

/**
 // model/admin.js
 const BaseModel = require('../../lib/model/BaseModel');
 module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // 继承 BaseModel
  class Admin extends BaseModel {
   // coding...
  }
  // 将 Admin 注入 app.model 中,利用  Sequelize.Model 的 init 方法
  Admin.init({...attributes}, { ...options, sequelize: app.model });

 return Admin;
}
*/
