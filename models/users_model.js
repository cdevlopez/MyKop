const dbsequelize = require('../models/db');
const Sequelize = require('sequelize');

const User = dbsequelize.define('users', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
})

module.exports = User;