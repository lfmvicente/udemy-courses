const Sequelize = require('sequelize');
const connection = new Sequelize(
    'blog',
    'root',
    'localhost',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;
