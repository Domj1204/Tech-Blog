// Purpose: Create the Sequelize instance and export it to be used in ../server.js
require('dotenv').config();

// Import the Sequelize constructor from the library 
const Sequelize = require('sequelize');
let sequelize;

if (process.env.JAWSDB_URL) {
	// If the JawsDB URL exists, create a new instance of Sequelize with the JawsDB URL
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
  	{
		host: 'localhost',
		dialect: 'mysql',
		port: 3306,
  	}
);
}

// Export the Sequelize instance to be used in ../server.js
module.exports = sequelize;