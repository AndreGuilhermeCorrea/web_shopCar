const sequelize = require('sequelize');

const db = require('../db/connection');

const ShopCar = db.define('shopCar', {
    titulo: {
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
    new_car: {
        type: sequelize.INTEGER,
    },
});

module.exports = ShopCar;