const express = require('express');
const usersData = express.Router()
const Authentication = require('../middleware/autherization');
const Users = require('../models/userLogRegModels');


usersData.use(Authentication)

usersData.get('/users',async(req,res)=>{
    try {
        const data = Users.find({});

        if(data){
            return res.status(200).json({data:data});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = usersData;