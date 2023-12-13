const Sequelize = require('sequelize');
const connection = require('../database/connection')
const Category = require('../categories/Category');

const Article = connection.define('article', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); // 1 category -> N articles
Article.belongsTo(Category); //1 article -> 1 category

module.exports = Article;
