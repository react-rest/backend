'use strict';

module.exports = app => {
  const { BOOLEAN } = app.Sequelize;

  const UserTask = app.model.define('user_task', {
    admin: BOOLEAN,
  });

  return UserTask;
};
