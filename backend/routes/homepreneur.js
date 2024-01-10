const express = require('express')
const homepreneur = express.Router();
const Authentication = require('../middleware/autherization');
const HomepreneurDetails = require('../models/homepreneurModel');
const HomeProduct = require('../models/hometrprenurProduct');

homepreneur.use(Authentication);

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         return cb(null, '../public/images');
//     },
//     filename: function (req, file, cb) {
//         // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         // cb(null, file.fieldname + '-' + uniqueSuffix);
//         return cb(null,`${Data.now()}_${file.originalname}`)
//     }
// });

// const upload = multer({ limits: { fileSize: 10 * 1024 * 1024 }, storage: storage });
// const upload = multer(storage);


// const asyncMiddleware = (fn) => (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch(next);
// };

// homepreneur.post('/presentIdea',upload.single("images"),asyncMiddleware(async(req,res)=>{
//     console.log(req.body)
//     console.log(req.file)
//     try {
//         const { businessCategory, empID, businessName, description, fundRequest } = req.body;
//         const file = req.file;

//         if (!file) {
//             return res.status(400).json({ error: 'No file uploaded.' });
//         }

//         const presentIdea = new HomepreneurDetails({
//             businessCategory,
//             empID,
//             businessName,
//             description,
//             images: file.filename,
//             fundRequest
//         });

//         const data = await presentIdea.save();

//         if (data) {
//             res.status(200).json({ data: data });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }))

homepreneur.post('/presentIdea',async(req,res)=>{
    try {

        const data = await HomepreneurDetails.create({user:req.user,...req.body});

        if (data) {
            res.status(200).json({message:"Idea created successfully."});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


// product..
homepreneur.post('/product',async(req,res)=>{
    try {

        const data = await HomeProduct.create({user:req.user,...req.body});

        if (data) {
            res.status(200).json({message:"Product created successfully"});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = homepreneur;