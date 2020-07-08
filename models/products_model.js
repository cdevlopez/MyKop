const dbsequelize = require('../models/db');
const Sequelize = require('sequelize');

const Product = dbsequelize.define('products', {
    idProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    numProduct: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    club: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nation: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    player: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
}
);

module.exports = Product;
