/**
 * @file Comment.js
 * Defines the Comment model and its associations
 * - id					- Integer, primary key, auto increment
 * - content				- Text, required
 * - created_date		- Date, required
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
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
		},
		post_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'post',
				key: 'id'
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'comment'
	}
);

module.exports = Comment;