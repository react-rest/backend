'use strict';
const bcrypt = require('bcrypt');

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    username: {
      type: STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING(64),
      allowNull: false,
      set(val) {
        this.setDataValue('password', bcrypt.hashSync(val, 10));
      },
    },
    phoneNumber: {
      type: STRING,
      field: 'phone_number',
    },
    age: INTEGER,
    lastSignInAt: {
      type: DATE,
      field: 'last_sign_in_at',
      defaultValue: new Date(),
    },
  }, {
    hooks: {
      // eslint-disable-next-line arrow-parens
      // afterValidate: (info) => {
      //   info.password = bcrypt.hashSync(info.password, 10);
      // },
    },
  });

  User.associate = () => {
    User.hasMany(app.model.Post, {
      as: 'posts',
      hooks: true,
      onDelete: 'CASCADE',
    });
  }

  return User;
};
