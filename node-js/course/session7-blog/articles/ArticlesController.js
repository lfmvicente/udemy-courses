const express = require('express');
const router = express.Router();

router.get('/articles', (request, response) => {
    response.send('articles route')
});

router.get('/admin/articles/new', (request, response) => {
    response.send('admin artricles route')
});

module.exports = router;