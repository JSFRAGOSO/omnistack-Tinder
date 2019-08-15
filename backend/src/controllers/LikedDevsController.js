const Dev = require('../models/Dev');
const axios = require('axios');

module.exports = {
    async index(req,res){
        const {user} = req.headers;
        const loggedDev = await Dev.findById(user);
        
        const users =  await Dev.find({
            $and:[
                {_id: { $ne:user } },
                {_id: { $in:loggedDev.likes } },
            ]
        })
    return res.json(users);
    }
}