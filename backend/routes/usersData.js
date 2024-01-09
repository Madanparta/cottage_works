const express = require('express');
const usersData = express.Router()
const Authentication = require('../middleware/autherization');
const Users = require('../models/userLogRegModels');
const HomepreneurDetails = require('../models/homepreneurModel');


usersData.use(Authentication)

usersData.get('/users',async(req,res)=>{
    try {
        const data = await Users.find({});

        if(data){
            return res.status(200).json({data:data});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// home entruprenur..
usersData.get('/homeEntr',async(req,res)=>{
    try {
        const home = await HomepreneurDetails.find({});

        if(home){
            return res.status(200).json({home:home});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = usersData;