/**
 * @file User.js
 * Defines the User model and associations between the User, Post, and Comment models
 * - id					- Integer, primary key, auto increment
 * - username			- String, required
 * - email				- String, required, unique, must be a valid email address
 * - password			- String, required, must be at least 8 characters long
 */

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
	// Add a method to the User model to check the password
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			}
		}
	},
	{
		// Add a beforeCreate hook to hash the password using bcrypt before adding the User to the database
		hooks: {
			beforeCreate: async (newUserData) => {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			}
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user'
	}
);

module.exports = User;
