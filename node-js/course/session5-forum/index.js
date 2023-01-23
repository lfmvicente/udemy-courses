const express = require('express');
const app = express();

//use ejs as engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(request, response){
    response.send("Please, pass parameters on URL")
})

app.get('/:firstname/:lang', function(request, response){
    let firstname = request.params.firstname;
    let lang = request.params.lang
    let success = false;

    let products = [
        {name: 'Playstation 5', price: 500.0},
        {name: 'Gran Turismo', price: 50.0},
        {name: 'Resident Evil 4', price: 500.0}
    ]
    
    response.render('index', {
        firstname: firstname,
        lang: lang,
        company: 'My Company',
        success: success,
        products: products
    });
});

app.listen(8080, ()=>{
    console.log('Server Running');
});

