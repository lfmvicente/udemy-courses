const express = require('express'); //importando express
const app = express(); //funçao que inicia o express

app.get('/', function(request, response){
    response.send('Welcome to my app!');   
})

//route with mandatory param
app.get('/:name', function(request, response){
    let name = request.params.name
    response.send(name + ', welcome to my app!')
})

//route with optional param
app.get('/blog/:article?', function(request, response){
    let article = request.params.article
    if (article) {
        response.send('Welcome to ' + article + ' session')
    }
    response.send('Welcome to my blog home!')
})

//route with query param (insecure, not often used)
app.get('/channel/youtube', function(request, response){
    let channel = request.query['channel']
    if (channel) {
        response.send('<h2>Welcome to ' + channel + '\'s channel <\/h2>')
    }
    response.send('<h1>Welcome to my Youtube channel session</h1>')
})

app.listen(8181,
    function(error){
        if (error) {
            console.log('Server Error');
        } else {
            console.log('Server Online');
        }
    }
)