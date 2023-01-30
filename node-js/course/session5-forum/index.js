const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db/database');
const Question = require('./db/Question');

//DB connection promise
connection
    .authenticate()
    .then(() =>{
        console.log("Db connect success");
    })
    .catch((exception) => {
        console.log(exception);
    })

//use ejs as engine
app.set('view engine', 'ejs');
//configure views path
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
//bodyParser configurations
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.get('/', (request, response) => {
    Question.findAll({ raw: true, order:[
        ['id', 'DESC']
    ]}).then((questions) => {
        response.render('index', {
            questions: questions
        });
        console.log(questions);
    })
});

app.get('/ask', (request, response) => {
    response.render('ask');
});

app.post('/save-question', (request, response) => {
    let title = request.body.title
    let description = request.body.description
    Question.create({
        title: title,
        description: description
    }).then(() => {
        response.redirect('/');
    })
});

app.listen(8080, () => {
    console.log('Server Running');
});

