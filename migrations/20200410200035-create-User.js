'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
      },
      DOB:{
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
      },
      mobile: {
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        unique: false
      },
      password: {
        type: Sequelize.STRING,
      },
      deviceToken:{
        type: Sequelize.STRING,
      },
      devicetype: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      currentdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue:'0',
        comment :" 0 De active  1 for Active 2 for deleted"
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};