const mongoose = require('mongoose');

const homepreneurShema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    empID:{
        type:String,
        required:true
    },
    businessName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
    fundRequest:{
        type:String,
        required:true
    },
},{timestamps:true});

const HomepreneurDetails = mongoose.model('HomepreneurDetails',homepreneurShema);

module.exports = HomepreneurDetails