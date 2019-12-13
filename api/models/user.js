'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
    lastname: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        }
      },
  }, {
    sequelize,
    modelName: 'users'
  });

  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};