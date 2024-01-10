const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    empID:{
        type:String
    },
    category:{
        type:String
    },
    Product_name:{
        type:String
    },
    images:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
},{timestamps:true});

const HomeProduct = mongoose.model('HomeProduct',productSchema);

module.exports = HomeProduct;