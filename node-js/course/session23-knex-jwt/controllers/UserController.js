const User = require('../models/User');
const PasswordToken = require('../models/PasswordToken');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const secret = "ddfasdfasdfdafa";

class UserController {
    
    async index(req, res){
        let users = await User.findAll();
        res.json({users});
    }

    async create(req, res){
        var {email, name, password} = req.body;
        
        if (!email) {
            res.status(400);
            res.json({err: "Email must not be empty"});
            return;
        }

        let emailExists = await User.findEmail(email);

        if (emailExists) {
            res.status(406);
            res.json({err: "Email already in use"});
            return;
        }

        await User.save(email, password, name);

        res.status(200);
        res.json("OK");
    }

    async findById(req, res){
        let id = req.params.id;
        let user = await User.findById(id);
        if (!user) {
            res.status(404);
            res.json({err: "User not found"});
        }else{
            res.json({user});
        }
    }

    async edit(req, res){
        let {id, name, email, role} = req.body;
        let result = await User.update(id, name, email, role);
        if (result.status) {
            res.send("ok");
        }else{
            res.status(406);
            res.json(result);
        }
    }

    async delete(req, res) {
        let id = req.params.id;
        let result = await User.delete(id);
        if (result.status) {
            res.send("ok");
        }else{
            res.status(406);
            res.json(result);
        }
    }

    async recoverPassword(req, res){
        let email = req.body.email;
        let result = await PasswordToken.create(email);
        if (result.status) {
            res.json(result.token);
        }else{
            res.status(406);
            res.json(result.err);
        }
    }

    async changePassword(req, res){
        let token = req.body.token;
        let pwd = req.body.password;

        let result = await PasswordToken.validate(token);
        console.log(result);

        if (result.status) {
            console.log(pwd, result.token.user_id, result.token.token);
            await User.changePassword(pwd, result.token.user_id, result.token.token);
            await PasswordToken.setUsed(result.token.token);
            res.send("ok");
        }else{
            res.status(406);
            res.send("Invalid token");
        }
    }

    async login(req, res){
        let {email, password} = req.body;
        let user = await User.findByEmail(email);

        if (user) {
            let result = await bcrypt.compare(password, user.password);
            if (result) {
                let token = jwt.sign({email: user.email, role: user.role}, secret);
                res.json({token: token});
            }else{
                res.status(406);
                res.json({message: "Invalid credentials"});
            }
            res.json({status: result});
        }else{
            res.json({status: false});
        }
    }
}

module.exports = new UserController();