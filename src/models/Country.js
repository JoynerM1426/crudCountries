const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const continent = require('./Continent');

const Contry = sequelize.define('contry', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    languaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flagUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});
Contry.belongsTo(continent)
continent.hasMany(Contry)

module.exports = Contry;