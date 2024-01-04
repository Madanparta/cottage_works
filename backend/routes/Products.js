const express = require('express');
const ProductCategoryRouter = express.Router();
const Authentication = require('../middleware/autherization');
const ProductCategory = require('../models/productCategory');

ProductCategoryRouter.use(Authentication)


ProductCategoryRouter.get('/category',async(req,res)=>{
    try {
        const data = await ProductCategory.find({});
        if(data){
            res.status(200).json({data:data})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

ProductCategoryRouter.post('/category',async(req,res)=>{
    const {category}=req.body;
    try {
        const result = await ProductCategory.updateOne({ user: req.user },{ $push: { category: category } },{ upsert: true, new: true });
        res.status(200).json({
            message:"Category updated successfully!",
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = ProductCategoryRouter;