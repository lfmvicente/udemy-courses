const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "mySecureKey";

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(req, res, next){
    const authToken = req.headers['authorization'];
    if (authToken) {
        let bearer = authToken.split(' ');
        let token = bearer[1]; 
        jwt.verify(token, JWTSecret, (err, data) => {
            if(err){
                res.status(401);
                res.json({err: "Invalid Token"});
            }else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        })
    }else{
        res.status(401);
        res.json({err: "Authentication error"});
    }
}

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
        },
        {
            id: 12,
            title: "Gran Turismo",
            year: 2020,
            price: 100
        },
    ],
    users: [
        {
            id: 1,
            name: "Luis",
            email: "mail@api.com",
            pwd: "xxxx"
        },
        {
            id: 2,
            name: "Felipe",
            email: "mail2@api.com",
            pwd: "zzzz"
        }
    ]
}

app.get("/games",auth,(req, res) => {
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

app.post("/auth", (req, res) => {
    let {email, pwd} = req.body;

    if (email) {
        let user = db.users.find(user => user.email == email);
        if (user) {
            if (user.pwd == pwd) {

                jwt.sign(
                    {
                        id:user.id,
                        email:user.email
                    },
                    JWTSecret,
                    {
                        expiresIn:'1h'
                    },
                    (err, token) => {
                        if (err) {
                            res.sendStatus(400);
                            res.json({err: "Internal Error"})
                        }else{
                            res.status(200);
                            res.json({token: token})
                        }
                    }
                )
            } else {
                res.status(401);
                res.json({err: "Invalid credentials"})
            }            
        }else{
            res.status(404);
            res.json({err: "User not found"})  
        }
    } else {
        res.status(401);
        res.json({err: "Invalid credentials"})
    }
});

app.listen(3000, () => {
    console.log("Running API");
})