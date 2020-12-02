const {DataTypes, Model} = require("sequelize");
const sequelize = require("../utils/database");

class Statistic extends Model {}

Statistic.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id",
    }
  },
  date: DataTypes.DATE,
  page_views: DataTypes.INTEGER,
  clicks: DataTypes.INTEGER,
},
  {
    sequelize,
  }
);

Statistic.sync().then(() => console.log("Statistic sync success"));

module.exports = Statistic;