const express = require('express');
const router = express.Router();

router.get('/articles', (request, response) => {
    response.send('articles route')
});

router.get('/admin/articles/new', (request, response) => {
    response.render('admin/articles/new')
});

module.exports = router;