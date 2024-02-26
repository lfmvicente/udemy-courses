const jwt = require("jsonwebtoken");
const secret = "ddfasdfasdfdafa";

module.exports = function(req,res, next){
    const authToken = req.headers.authorization.split(' ')[1];

    if (authToken) {
        try{
            let result = jwt.verify(authToken, secret);
            console.log(result);
            if (result.role == 1) {
                next();
            }else{
                res.status(403);
                res.json({message: "Role without permission"});
            }            
        }catch(err){
            res.status(403);
            res.json({message: "Unauthorized"});
        }
    }else{
        res.status(403);
        res.json({message: "Unauthorized"});
    }
}