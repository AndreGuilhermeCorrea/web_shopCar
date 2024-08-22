const sequelize = require('sequelize');

const db = require('../db/connections');

const ShopCar = db.define('shopCar', {
    title: {
        type: sequelize.STRING,
    },
    description: {
        type: sequelize.STRING,
    },
    valor: {
        type: sequelize.STRING,
    },
    marca: {
        type: sequelize.STRING,
    },
    modelo: {
        type: sequelize.STRING,
    },
    ano: {
        type: sequelize.STRING,
    },
    cor: {
        type: sequelize.STRING,
    },
    new_shopCar: {
        type: sequelize.INTEGER,
    },
});

module.exports = ShopCar;