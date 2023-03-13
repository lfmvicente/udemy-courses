const Sequelize = require('sequelize');
const connection = new Sequelize(
    'blog',
    'root',
    'localhost',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
        timezone: "-03:00"
    }
);

module.exports = connection;
