/**
 * @file Post.js
 * Defines the Post model and associations between the Post, User, and Comment models
 * - id					- Integer, primary key, auto increment
 * - title				- String, required
 * - content				- Text, required
 * - created_date		- Date, required
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		content: {
			type: DataTypes.TEXT('long'),
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		created_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id'
			}
		}
  	},
  	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'post'
  	}
);

module.exports = Post;