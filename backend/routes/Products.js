const express = require('express');
const ProductCategoryRouter = express.Router();
const Authentication = require('../middleware/autherization');
const Users = require('../models/userLogRegModels');
const ProductCategory = require('../models/productCategory');

ProductCategoryRouter.use(Authentication)

ProductCategoryRouter.post('/category',async(req,res)=>{
    const {name_of_category}=req.body;
    try {
        const category = await ProductCategory.create({user:req.user,name_of_category});
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = ProductCategoryRouter;