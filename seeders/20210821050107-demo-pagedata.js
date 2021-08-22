'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PageData', [{
        page_id: 1,
        title: 'Some Good Naming 1',
        content: 'Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus.',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        page_id: 1,
        title: 'Seriously Great Naming',
        content: 'Morbi eget magna nunc. Aenean tristique justo enim bibendum egestas. Integer accumsan imperdiet purus.',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        page_id: 1,
        title: 'Couldn\'t Name it Better Myself',
        content: 'Aliquam erat volutpat. Aenean ultrices in odio id tempor. Phasellus placerat eros ac vestibulum.',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        page_id: 2,
        title: 'Content Here',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.',
        createdAt: new Date(),
        updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PageData', null, {});
  }
};
