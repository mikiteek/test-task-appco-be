'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {};

  Statistic.init({
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      date: DataTypes.DATE,
      page_views: DataTypes.INTEGER,
      clicks: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
    }
  );
  return Statistic;
};