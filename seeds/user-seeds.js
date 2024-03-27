// Purpose: to seed the user table with data
const { User } = require('../models');

const userData = [
    {
        "username": "bluepanda2024",
        "email": "bluepanda2024@example.com",
        "password": "Secure*991"
    },
    {
        "username": "silverwolf359",
        "email": "silverwolf359@example.com",
        "password": "MyPass*882"
    },
    {
        "username": "crimsonfalcon7",
        "email": "crimsonfalcon7@example.com",
        "password": "Safeguard*776"
    },
    {
        "username": "amberjaguar",
        "email": "amberjaguar@example.com",
        "password": "KeepSafe*564"
    },
    {
        "username": "greentechno",
        "email": "greentechno@example.com",
        "password": "Protector*347"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;