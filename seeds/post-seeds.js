// Purpose: To seed the Post table with data
const { Post } = require('../models');

const postData = [
    {
        title: "streamlined project management now easier",
        content: "find out how project streamlining tools can revamp your team's efficiency. They're not just for large corporations anymore!",
        created_date: "01/15/2023",
        user_id: 4,
    },
    {
        title: "boosting daily productivity with simple hacks",
        content: "discover little changes that can make a big impact on your day-to-day tasks. From smarter notifications to strategic break-taking, learn how to work smarter.",
        created_date: "09/27/2021",
        user_id: 2,
    },
    {
        title: "explore new ways to manage data",
        content: "looking for a fresh approach to handle your application's data? We're discussing the latest trends in data management systems that are taking the industry by storm.",
        created_date: "01/01/2024",
        user_id: 3,
    },
    {
        title: "interactive learning with new dev quiz platform",
        content: "join our newly launched developer quiz platform and take your coding knowledge to the next level with fun, challenging quizzes!",
        created_date: "07/10/2023",
        user_id: 1,
    },
    {
        title:  "simplifying your code with smart tools",
        content: "learn about tools that help you clean up your codebase, making it more efficient and less prone to errors, without the hassle.",
        created_date: "04/22/2020",
        user_id: 2,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;