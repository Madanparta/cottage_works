const mongoose = require('mongoose')

const userLogRegModelSChema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message:'Invalid email address format'
        }
    },
    password:{
        type:String,
        required:true,
    },
    phone_number:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    role:{
        type:String,
    },
},{timestamps:true});

const Users = mongoose.model('Users',userLogRegModelSChema);

module.exports = Users;