const dbsequelize = require('../models/db');
const Sequelize = require('sequelize');

const Account = dbsequelize.define('accounts', {
    idClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    numClient: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telNumber: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
}
);

module.exports = Account;
