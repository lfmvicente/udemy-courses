const Sequelize = require('sequelize');
const connection = new Sequelize(
    'blog',
    'root',
    'localhost',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;
