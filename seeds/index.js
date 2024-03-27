// Purpose: This file is the entry point for the seed data. It will call the seed functions for users, posts, and comments. It will also sync the database and log a message to the console when the seed data has been successfully added to the database.
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log('\n----- DATABASE SYNCED -----\n');
	
	await seedUsers();
	console.log('\n----- USERS SEEDED -----\n');

	await seedPosts();
	console.log('\n----- POSTS SEEDED -----\n');
	
	await seedComments();
	console.log('\n----- COMMENTS SEEDED -----\n');

	process.exit(0);
};

seedAll();