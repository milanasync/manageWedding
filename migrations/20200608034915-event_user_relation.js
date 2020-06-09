"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("event_user_relation", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rel_type: {
        type: Sequelize.STRING,
      },
      invitation_sent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      gift_type: {
        type: Sequelize.STRING,
      },
      gift_given: {
        type: Sequelize.STRING,
      },
      gift_qnty: {
        type: Sequelize.STRING,
      },
      gift_unit: {
        type: Sequelize.STRING,
      },
      gift_given_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      return_gift_type: {
        type: Sequelize.STRING,
      },
      return_gift_given: {
        type: Sequelize.STRING,
      },
      return_gift_qnty: {
        type: Sequelize.STRING,
      },
      return_gift_unit: {
        type: Sequelize.STRING,
      },
      return_gift_given_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      created_by: {
        type: Sequelize.INTEGER,
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("event_user_relation");
  },
};
