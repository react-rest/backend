'use strict';

const qs = require('query-string');

module.exports = () => {
  return async function parseSearch(ctx, next) {
    ctx.params = qs.parse(ctx.search);
    await next();
  };
};
