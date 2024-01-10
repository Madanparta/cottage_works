const express = require('express');
const userLogReg = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/userLogRegModels');
const jwt = require('jsonwebtoken');

// user registration..

userLogReg.post('/reg',async(req,res)=>{
    try {
        const {name,email,password,phone_number,age,address,city,district,state,role} = req.body;

        const checkUser = await Users.findOne({email});
        if(checkUser){
            return res.status(409).json({ error: 'Conflict - User already exists' });
        }

        bcrypt.hash(password,10, async function(err,hash){
            if(err){
                return res.status(404).json({
                    error: 'Authentication failed' 
                });
            }
            if(hash){
                await Users.create({name,email,password:hash,phone_number,age,address,city,district,state,role:role || 'customer',approved:null})

                return res.status(200).json({ success: 'User registration successful' })
            }
        })
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


// user login with email and password.

userLogReg.post('/log',async(req,res)=>{
    try {
        const {email,password} = req.body;

        const checkUser = await Users.findOne({email});
        if(!checkUser){
            return res.status(404).json({ error: 'Invalid user - User dones not existed.!!' });
        }

        bcrypt.compare(password,checkUser.password).then(function(result){
            if(result){
                const token = jwt.sign({
                    email:checkUser.email,
                    id:checkUser._id,
                },process.env.SECRET,{expiresIn:'1h'});

                return res.status(200).json({
                    "name":checkUser.name,
                    "_id":checkUser._id,
                    "email":checkUser.email,
                    "phone_number":checkUser.phone_number,
                    "address":checkUser.address,
                    "city":checkUser.city,
                    "district":checkUser.district,
                    "state":checkUser.state,
                    "role":checkUser.role,
                    "token":token,
                });
            }
            if(!result){
                return res.status(400).json({ error: 'Bad Request - Invalid username and password' });
            }
        })
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// forgot password.
userLogReg.put('/pasforgt/:id',async(req,res)=>{
    const id = req.params.id;
    const {password,email}=req.body;
    try {
        const checkUser = await Users.findOne({email});
        if(!checkUser){
            return res.status(404).json({ message: 'User not found' })
        }else{
            bcrypt.hash(password,10, async function(err,hash){
                if(err){
                    return res.status(400).json({
                        "Error":err
                    });
                }else{
                    await Users.findByIdAndUpdate(id,{password:hash},{new:true});
                    return res.status(200).json({
                        message:"user email & password updated succesfully.!!"
                    })
                }
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// profile edit..
userLogReg.put('/edit/:id',async(req,res)=>{
    const id = req.params.id;
    const {email,password,phone_number,age,address,city} = req.body;
    try {
        const isUser = await Users.findOne({email});
        if(!isUser){
            return res.status(404).json({ message: 'User not found' })
        }else{
            bcrypt.hash(password,10, async function(err,hash){
                if(err){
                    return res.status(400).json({
                        "Error":err
                    })
                }else{
                    let updateData = await Users.findByIdAndUpdate(id,{password:hash,phone_number,age,address,city,email},{ new: true });
                    // if (!updateData) {
                    //     return res.status(404).json({ message: 'User not found' });
                    // }
                    res.json(updateData);
                }
            })
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
})


// approval updated..
userLogReg.put('/approval/:id',async(req,res)=>{
    const {approved} = req.body;
    try {
       const appr = await Users.findByIdAndUpdate({_id:req.params.id},{approved:approved})
       if(appr){
            return res.status(200).json(appr);
       }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
})

module.exports = userLogReg;