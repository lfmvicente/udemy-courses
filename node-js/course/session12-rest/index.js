const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let db = {
    games: [
        {
            id: 10,
            title: "God of War",
            year: 2022,
            price: 200
        },
        {
            id: 11,
            title: "God of War 2",
            year: 2010,
            price: 100
        }
    ]
}

app.get("/games",(req, res) => {
    res.statusCode = 200;
    res.json(db.games);
});

app.get("/games/:id",(req, res) => {
    
    if (isNaN(req.params.id)) {
        res.sendStatus = 400;
    } else {
        let id = parseInt(req.params.id);
        let game = db.games.find(g => g.id == id);
        if (game) {
            res.statusCode = 200;
            res.json(game)
        } else {
            res.sendStatus(404);
        }
    }
});

app.post("/game", (req, res) => {
    let {title, price, year} = req.body;
    db.games.push({
        id: Math.floor(Math.random() * 100),
        title,
        price,
        year
    });
    res.sendStatus = 200;
    res.json(db.games.find(g => g.id == 12));
});

app.delete("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus = 400;
    } else {
        let id = parseInt(req.params.id);
        let index = db.games.findIndex(g => g.id == id);
        if (index < 0) {
            console.log("aaaaa");
            res.sendStatus(404);
        } else {
            db.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus = 400;
    } else {
        let id = parseInt(req.params.id);
        let game = db.games.find(g => g.id == id);
        if (game) {
            res.statusCode = 200;
            let {title, price, year} = req.body;
             if (title) {
                game.title = title;
             }
             if (price) {
                game.price = price;
             }
             if (year) {
                game.year = year;
             }            

            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }
})

app.listen(3000, () => {
    console.log("Running API");
})