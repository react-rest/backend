'use strict';

module.exports = () => {
  return async function authority(ctx, next) {
    const accessToken = ctx.headers['admin-access'];
    const { User, UserToken } = ctx.model
    const userToken = await UserToken.findOne({
      where: { accessToken },
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
    });
    ctx.user = userToken ? userToken.user : null;
    await next();
  };
};
