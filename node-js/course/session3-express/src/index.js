const express = require("express"); //importando express
const app = express(); //funçao que inicia o express

app.listen(8181,
    function(error){
        if (error) {
            console.log("Server Error");
        } else {
            console.log("Server Online");
        }
    }
)