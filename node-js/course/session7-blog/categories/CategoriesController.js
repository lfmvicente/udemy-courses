const express = require('express');
const router = express.Router();

router.get('/categories', (request, response) => {
    response.send('categories route')
});

router.get('/admin/categories/new', (request, response) => {
    response.send('admin categories route')
});

module.exports = router;