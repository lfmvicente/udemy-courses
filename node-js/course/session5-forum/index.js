const express = require('express');
const app = express();

//use ejs as engine
app.set('view engine', 'ejs');

app.get('/:firstname/:lang', function(request, response){
    let firstname = request.params.firstname;
    let lang = request.params.lang
    
    response.render('index', {
        firstname: firstname,
        lang: lang,
        company: 'My Company'
    });
});

app.listen(8080, ()=>{
    console.log('Server Running');
});

