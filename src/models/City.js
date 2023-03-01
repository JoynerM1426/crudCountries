const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const country = require('./Country');

const City = sequelize.define('city', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isCapital: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    //country id
});
City.belongsTo(country);
country.hasMany(City);


module.exports = City;