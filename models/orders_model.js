const dbsequelize = require('./db');
const Sequelize = require('sequelize');

const orders = dbsequelize.define('orders', {
    idOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    numOrder: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dateOrder: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
}

);

module.exports = orders;