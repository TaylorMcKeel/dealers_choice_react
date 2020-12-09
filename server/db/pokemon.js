const Sequelize = require('sequelize');
const db = require('./db');
const { STRING, INTEGER } = Sequelize;

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
        validate: {
            isIn: [fire, water, ice, normal, rock, grass]
        }
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