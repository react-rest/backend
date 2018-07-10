'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530030572795_9180';

  // add your config here
  config.middleware = [
    'errorHandler',
    'authority',
  ];

  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api',
  };

  config.security = {
    csrf: false,
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    define: {
      schema: 'base',
      schemaDelimiter: '_',
      underscored: true,
      // underscoredAll: true,
      freezeTableName: true,
    },
  };

  return config;
};
