/**
 * @file index.js
 * Define the associations between the Sequelize models
 */

/* Import the models */
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

/* Define the associations */
User.hasMany(Post, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

/* `Post` model belongs to `User` */
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// Comment model belongs to User and Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {
    User,
    Post,
    Comment
};