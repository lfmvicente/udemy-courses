const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');
const { response } = require('express');

router.get('/admin/categories/new', (request, response) => {
    response.render('admin/categories/new');
});

router.post('/categories/save', (request, response) => {
    let title = request.body.title;
    if (title) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            response.redirect('/');
        })
    } else {
        response.redirect('/admin/categories/new');
    }
});

router.get('/admin/categories', (request, response) => {
    
    Category.findAll().then((categories) => {
        response.render('admin/categories/index', {categories: categories});  
    })
})

router.post('/categories/delete', (request, response) => {
    let id = request.body.id
    if (id) {
        if (!isNaN(id)) { //verifica se o id é numérico
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                response.redirect('/admin/categories')
            })
        } else {
            response.redirect('/admin/categories')
        }
    } else {
        response.redirect('/admin/categories')
    }
})

module.exports = router;