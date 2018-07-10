'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const UserToken = app.model.define('user_token', {
    accessToken: {
      type: STRING,
      allowNull: false,
      field: 'access_token',
    },
  });

  UserToken.associate = () => {
    UserToken.belongsTo(app.model.User, {
      as: 'user',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
  }

  return UserToken;
};
