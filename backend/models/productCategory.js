const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
    category:Array,
});

const ProductCategory = mongoose.model('ProductCategory',productCategorySchema);

module.exports = ProductCategory;