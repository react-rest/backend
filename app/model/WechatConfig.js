'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const WechatConfig = app.model.define('wechat_config', {
    appId: {
      type: STRING(24),
      allowNull: false,
    },
    secret: {
      type: STRING(64),
      allowNull: false,
    },
    token: {
      type: STRING(255),
    },
  });

  WechatConfig.associate = () => {
    WechatConfig.belongsTo(app.model.User, {
      as: 'wechatConfig',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
  }

  return WechatConfig;
};
