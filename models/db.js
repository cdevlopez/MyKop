//  import du module mysql2
const mysql = require('mysql2');
const {Sequelize} = require('sequelize');

const dbsequelize = new Sequelize('mykop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = dbsequelize;
