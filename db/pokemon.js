const Sequelize = require('sequelize');
const { STRING, INTEGER } = Sequelize;
const db = require('./db')


const Pokemon = db.define('pokemon',{
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    type: {
        type: STRING,
        allowNull: false,
       
    },
    health: {
        type: INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    attack: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Pokemon