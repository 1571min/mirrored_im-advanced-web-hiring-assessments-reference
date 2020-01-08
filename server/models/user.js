'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      //TODO : user 테이블에 필요한 스키마를 정의 하세요
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      mobile: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
