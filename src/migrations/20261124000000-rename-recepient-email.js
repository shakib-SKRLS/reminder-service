'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'NotificationTickets',
      'recepientEmail',
      'recipientEmail'
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'NotificationTickets',
      'recipientEmail',
      'recepientEmail'
    );
  }
};
