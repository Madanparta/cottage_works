const express = require('express');
const ContactUs = require('../models/contactusModel');
const contactUs = express.Router();

contactUs.post('/contactus',async(req,res)=>{
    console.log(req.body)
    try {
        const {name,email,message} = req.body;
        await ContactUs.create({name,email,message})
        return res.status(200).json({ success: 'we will contact soon.!!' })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

contactUs.get('/contactus',async(req,res)=>{
    try {
        const contact = await ContactUs.find({})
        if (contact) {
            res.status(200).json({data:contact});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = contactUs;