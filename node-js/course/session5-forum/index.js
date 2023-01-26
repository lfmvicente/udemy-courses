const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//use ejs as engine
app.set('view engine', 'ejs');
//configure views path
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));

//bodyParser configurations
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json);

//routes
app.get('/', (request, response) => {
    response.render('index');
});

app.get('/ask', (request, response) => {
    response.render('ask');
});

app.post('/save-question', (request, response) => {
    let title = request.body.title
    let description = request.body.description
    response.send("Title: ")
});

app.listen(8080, ()=>{
    console.log('Server Running');
});

