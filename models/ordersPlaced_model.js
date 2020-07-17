const dbsequelize = require('./db');
const Sequelize = require('sequelize');
const { tableName } = require('./ordersPlaced_model');

const ordersPlaced = dbsequelize.define('orders_placed', {
    idOrdersPlaced: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    numOrdersPlaced: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dateOrdersPlaced: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'orders_placed'
}
);

module.exports = ordersPlaced;