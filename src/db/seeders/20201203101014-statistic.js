'use strict';
const {getUsersStatisticData} = require("../../helpers/getJsonDataHelper");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Statistics",
      await getUsersStatisticData(),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Statistics", null);
  }
};
