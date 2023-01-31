const sequelize = require('sequelize');
const connection = require('./database');

const Answer = connection.define('answer', {
    id: {
        type: sequelize.SMALLINT,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    question_id: {
        type: sequelize.SMALLINT,
        allowNull: false
    },
    content: {
        type: sequelize.TEXT,
        allowNull: false
    }
});

Answer.sync({force: false}).then(()=> {})
module.exports = Answer;