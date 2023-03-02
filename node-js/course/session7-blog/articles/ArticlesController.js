const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');

router.get('/admin/articles/new', (request, response) => {
    Category.findAll().then(categories => {
        response.render('admin/articles/new', {categories: categories})
    })
});

router.post('/articles/create', (request, response) => {
    let title = request.body.title;
    let content = request.body.content;
    let categoryId = request.body.category;
    if (title) {
        Article.create({
            title: title,
            content: content,        
            slug: slugify(title),
            categoryId: categoryId
        }).then(() => {
            response.redirect('/admin/articles');
        })
    } else {
        response.redirect('/admin/articles/new');
    }
});

router.get('/admin/articles', (request, response) => {
    Article.findAll().then(articles => {
        response.render('admin/articles/index', {articles: articles})
    })
});

router.get('/admin/articles/edit/:articleId', (request, response) => {
    let articleId = request.params.articleId
    if (!isNaN(articleId)) {
        Article.findByPk(articleId).then(article => {
            if (article != undefined) {
                Category.findAll().then(categories => {
                    response.render('admin/articles/edit', {
                        article: article,
                        categories: categories
                    })
                })
            } else {
                response.redirect('/admin/articles');
            }
        }).catch(erro => {
            response.redirect('/admin/articles');    
        })
    } else {
        response.redirect('/admin/articles');
    }
})

router.post('/articles/update', (request, response) => {
    let title = request.body.title;
    let id = request.body.id;
    let content = request.body.content;
    let categoryId = request.body.categoryId
    if (id && title) {
        Article.update({
            title: title,
            slug: slugify(title),
            content: content,
            categoryId: categoryId
        },{
            where: {
                id : id
            }
        }).then(() => {
            response.redirect('/admin/articles');
        })
    } else {
        response.redirect('/admin/articles/new');
    }
})

router.post('/articles/delete', (request, response) => {
    let id = request.body.id
    if (id) {
        if (!isNaN(id)) { //verifica se o id é numérico
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                response.redirect('/admin/articles')
            })
        } else {
            response.redirect('/admin/articles')
        }
    } else {
        response.redirect('/admin/articles')
    }
})

module.exports = router;