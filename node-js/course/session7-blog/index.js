const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const categoriesController = require ('./categories/CategoriesController');
const articlesController = require ('./articles/ArticlesController');
const Article = require('./articles/Article');
const Category = require('./categories/Category');

//TinyMce
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database
connection.authenticate().then(() => {
    console.log('Database Connected');
}).catch((error) => {
    console.log(error);
})

//Static
app.use(express.static('public'));

//Controllers
app.use('/', categoriesController);
app.use('/', articlesController);

//Routes
app.get('/', (request, response) => {
    response.render("index")
})

app.listen(8080, () => {
    console.log('Server Online')
})