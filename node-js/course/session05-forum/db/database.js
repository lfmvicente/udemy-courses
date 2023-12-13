const sequelize = require('sequelize');

const connection = new sequelize('forum', 'root', 'localhost', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;