//  import du module mysql2
const mysql = require('mysql2');
const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

const dbsequelize = new Sequelize('mykop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = dbsequelize;
