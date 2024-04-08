// Purpose: To seed the database with comment data.
const { Comment } = require('../models');

const commentData = [
    {
        "user_id": 1,
        "post_id": 3,
        "content": "This update is fantastic, can't wait to see the features in action!",
        "created_date": "03/12/2024"
    },
    {
        "user_id": 2,
        "post_id": 1,
        "content": "Appreciate this walkthrough, it's a huge help for beginners like myself.",
        "created_date": "06/22/2020"
    },
    {
        "user_id": 5,
        "post_id": 3,
        "content": "Intriguing approach, I've bookmarked this for our next team meeting.",
        "created_date": "07/18/2022"
    },
    {
        "user_id": 4,
        "post_id": 2,
        "content": "Could this integrate with our current toolkit? Who can I talk to for more details?",
        "created_date": "08/09/2022"
    },
    {
        "user_id": 1,
        "post_id": 5,
        "content": "The UI is intuitive and user-friendly, excellent work!",
        "created_date": "11/05/2023"
    },
    {
        "user_id": 3,
        "post_id": 4,
        "content": "I'm always on the lookout for tools like this, adding it to my arsenal.",
        "created_date": "04/21/2024"
    },
    {
        "user_id": 5,
        "post_id": 3,
        "content": "Curious about compatibility with other plugins. Has anyone tested this?",
        "created_date": "05/30/2024"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;