'use strict';

module.exports = app => {
  const { STRING, TINYINT, DATE, TEXT, INTEGER } = app.Sequelize;

  const WechatUser = app.model.define('wechat_user', {
    openid: {
      type: STRING(64),
      allowNull: false,
    },
    nickname: {
      type: STRING(64),
      allowNull: false,
    },
    sex: {
      type: TINYINT(1),
      default: 0,
    },
    headImgUrl: {
      type: STRING(128),
      field: 'head_img_url',
    },
    subscribedAt: {
      type: DATE,
      field: 'subscribed_at',
      default: new DATE(),
    },
    unionId: {
      type: STRING(64),
      field: 'union_id',
    },
    groupId: {
      type: INTEGER,
      field: 'group_id',
    },
    remark: TEXT,
  });

  WechatUser.associate = () => {
  }

  return WechatUser;
};

