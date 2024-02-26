const knex = require('../database/connection');
const bcrypt = require("bcryptjs");

class User{
    
    async save(email, password, name){
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            password = hashedPassword;
            await knex.insert({email,password,name,role: 0}).table('users');
        }catch(err){
            res.send(err);
        }
    }

    async findEmail(email){
        try {
            var user = await knex.select("*").from("users").where({email: email});
            if (user.length > 0) {
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }

    async findAll(){
        try {
            var result = await knex.select(["id","name","email","role"]).table("users");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async findById(id){
        try {
            var result = await knex.select(["id","name","email","role"]).from("users").where({id: id});
            if (result.length > 0) {
                return result[0];
            }else{
                return undefined;
            }
        }catch(err){
            console.log(err);
            return undefined;
        }
    }

    async update(id, name, email, role){
        
        let user = await this.findById(id);
        if (user) {
            let editUser = {};
            if (email) {
                if (email !== user.email) {
                    let result = await this.findEmail(email);
                    if (!result) {
                        editUser.email = email;
                    }
                }else{
                    return {status: false, err:"Email already in use"}
                }
            }

            if (name) {
                editUser.name = name;
            }

            if (role) {
                editUser.role = role;
            }

            try{    
                await knex.update(editUser).where({id: id}).table("users");
                return {status: true}
            }catch(err){
                console.log(err);
            }
        
        }else{
            return {status: false, err:"User not found with id " + id}
        }
    }

    async delete(id) {
        let user = await this.findById(id);
        if (user !== undefined) {
            try{
                await knex.delete().where({id: id}).table('users');
                return {status: true};
            }catch(err){
                return {status: false, err: err}
            }
            
        }else{
            return {status:false, err:"user not found with id " + id}
        }
    }

    async findByEmail(email){
        try {
            var result = await knex.select("*").from("users").where({email: email});
            if (result.length > 0) {
                return result[0];
            }else{
                return undefined;
            }
        }catch(err){
            console.log(err);
            return undefined;
        }
    }

    async changePassword(password, id, token){
        const hashedPassword = await bcrypt.hash(password, 10);
        try{
            await knex.update({password: hashedPassword}).where({id: id}).table('users');
            return {status: true};
        }catch(err){
            return {status: false, err: err}
        }
    }
}

module.exports = new User();