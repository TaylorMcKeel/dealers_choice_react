const Sequelize = require('sequelize');
const { STRING, INTEGER } = Sequelize;
const db = require('./db')


const Trainor = db.define('trainor',{
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    hometown: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    age: {
        type: INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    }
})

module.exports = Trainor