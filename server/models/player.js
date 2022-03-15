"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../utils/passwordHandler");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Username already taken",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Username is required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email have been registered",
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password is required, cannot be blank",
          },
          len: {
            args: [6],
            msg: "Password minimal 6 character",
          },
        },
      },
      experience: DataTypes.INTEGER,
      lvl: DataTypes.INTEGER,
    },
    {
      hooks: {
        async beforeCreate(instance) {
          instance.password = await hashPassword(instance.password);
        },
      },
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
