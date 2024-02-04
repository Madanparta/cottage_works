const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    email:{
        type:String,
    },
    name:{
        type:String,
    },
    message:{
        type:String,
    },
},{timestamps:true});

const ContactUs = mongoose.model('Contact us',contactUsSchema);

module.exports = ContactUs;