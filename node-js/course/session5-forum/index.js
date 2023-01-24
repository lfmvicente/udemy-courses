const express = require('express');
const app = express();
const path = require('path');

//use ejs as engine
app.set('view engine', 'ejs');
//configure views path
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/ask', (request, response) => {
    response.render('ask');
});

app.listen(8080, ()=>{
    console.log('Server Running');
});

