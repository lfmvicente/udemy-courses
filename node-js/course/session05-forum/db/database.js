const sequelize = require('sequelize');

const connection = new sequelize('forum', 'dev', 'myapp', {
    host: 'db',
    dialect: 'mysql'
});

module.exports = connection;