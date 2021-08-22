'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert('Pages', [{
		id: 1,
		label: 'home',
		name: 'Home',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{ 
		id: 2,
		label: 'contact',
		name: 'Contact',
		createdAt: new Date(),
		updatedAt: new Date()
	}
])
},

down: async (queryInterface, Sequelize) => {
	await queryInterface.bulkDelete('Pages', null, {});
}
};
