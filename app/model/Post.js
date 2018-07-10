'use strict';

module.exports = app => {
  const { STRING, TEXT } = app.Sequelize;

  const Post = app.model.define('post', {
    title: STRING(30),
    content: TEXT,
  });

  Post.associate = () => {
    app.model.Post.belongsTo(app.model.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
      as: 'user',
    });
  }

  return Post;
};
