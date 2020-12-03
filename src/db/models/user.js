'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Statistic, {
        foreignKey: "user_id",
        as: "statistics",
      });
    }
  };
  User.init({
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["Male", "Female"]]
        },
      },
      ip_address: {
        type: DataTypes.STRING,
        validate: {
          isIP: true
        },
      }
    },
    {
      sequelize,
      timestamps: false,
    }
  );
  return User;
};