const express = require('express');
const session = require('express-session');

const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');

const categoriesController = require ('./categories/CategoriesController');
const articlesController = require ('./articles/ArticlesController');
const usersController = require('./users/UsersController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');
const User = require('./users/User');

//Session
app.use(session({
    secret: "aaabbbcccdddeeefffggg",
    cookie: {maxAge: 30000}
}))

app.get('/session', (req, res) => {
    req.session.practice = 'practice course'
    req.session.email = 'test@mail.com'
    req.session.user = {
        username: 'test',
        password: 'xxxx' 
    }
    res.send('Session created')
})

app.get('/read', (req, res) => {
    res.json({
        practice: req.session.practice,
        user: req.session.user
    })
})

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
app.use('/', usersController);

//Routes
app.get('/', (request, response) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            response.render("index", {articles: articles, categories: categories})
        })
    })
})

app.get('/:slug', (request, response) => {
    let slug = request.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article) {
            Category.findAll().then(categories => {
                response.render("article", {article: article, categories: categories})
            })
        } else {
            response.redirect('/')
        }
    }).catch(erro => {
        response.redirect('/')
    })
})

app.get('/category/:slug', (request, response) => {
    let slug = request.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if (category) {
            
            Category.findAll().then(categories => {
                response.render('index', {articles: category.articles, categories:categories})
            })
        } else {
            response.redirect('/')
        }
    }).catch(erro => {
        response.redirect('/')
    })
})

app.listen(8080, () => {
    console.log('Server Online')
})