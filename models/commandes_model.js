const dbsequelize = require('../models/db');
const Sequelize = require('sequelize');

const Com = dbsequelize.define('commande', {
    idCommande: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    numCommande: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dateCommande: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
}

);

module.exports = Com;