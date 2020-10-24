'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Users', [{
       firstName: 'John',
       lastName: 'Doe',
       email: 'johndoe@gmail.com',
       gitHubID: null,
       gitHubUsername: "",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@gmail.com',
      gitHubID: null,
      gitHubUsername: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jacob',
      lastName: 'Jacobs',
      email: 'jacobjacobs@gmail.com',
      gitHubID: null,
      gitHubUsername: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
