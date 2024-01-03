const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Users',
    },
    name_of_category:{
        type:[{type:String}],
    }
});

const ProductCategory = mongoose.model('ProductCategory',productCategorySchema);

module.exports = ProductCategory