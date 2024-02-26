const knex = require('../database/connection');
const User = require('./User');

class PasswordToken {

    async create(email){
        let user = await User.findByEmail(email);
        if (user) {
            try{
                let token = Date.now();
                await knex.insert({
                    user_id: user.id,
                    token: token
                }).table("password_tokens");

                return {status: true, token: token};
            }catch(err){
                console.log(err);
                return {status: false, err: err};
            }
            
        }else{
            return {status:false, err:"User not found with email " + email}
        }
    }

    async validate(token){
        try{
            let result = await knex.select("*").table("password_tokens").where({token: token});
            console.log(result);
            if (result.length > 0) {
                let tk = result[0];
                if (tk.used > 0) {
                    return {status: false};
                }else{
                    return {status: true, token: tk};
                }
            }else{
                return {status: false};
            }
        }catch(err){
            console.log(err);
            return {status: false, err: err};
        }
    }

    async setUsed(token){
        await knex.update({used: 1}).where({token: token}).table("password_tokens");
    }
}

module.exports = new PasswordToken();