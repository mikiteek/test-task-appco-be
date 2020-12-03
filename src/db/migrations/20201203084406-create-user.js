'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      gender: {
        type: Sequelize.STRING,
        validate: {
          isIn: [["Male", "Female"]]
        },
      },
      ip_address: {
        type: Sequelize.STRING,
        validate: {
          isIP: true
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};