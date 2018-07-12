'use strict';
const jwt = require('jsonwebtoken');

module.exports = () => {
  return async function authority(ctx, next) {
    const accessToken = ctx.headers['admin-access'];
    try {
      const user = jwt.verify(accessToken, ctx.app.config.JWT_SECRET);
      ctx.user = user;
    } catch (e) {
      ctx.throw(401, '鉴权失败');
    }
    await next();
  };
};
