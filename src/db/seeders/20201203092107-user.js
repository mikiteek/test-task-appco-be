'use strict';
const {getUsersData} = require("../../helpers/getJsonDataHelper");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      await getUsersData(),
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null);
  }
};
