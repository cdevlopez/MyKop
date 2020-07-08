const dbsequelize = require('../models/db');
const Sequelize = require('sequelize');

const Pack = dbsequelize.define('packs', {
    idPack: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    numPack: {
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

module.exports = Pack;
