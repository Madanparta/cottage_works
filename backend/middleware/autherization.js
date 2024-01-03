const jwt = require('jsonwebtoken');
require('dotenv').config()

const Authentication = (req,res,next)=>{
    if(req.headers['x-access-token']){
        const token = req.headers['x-access-token'];
        if(token){
            jwt.verify(token,process.env.SECRET,function(err,decode){
                if(err){
                    return res.status(400).json({message:'token not valid'});
                }
                req.user = decode.id;
                next();
            })
        }else{
            return res.status(401).json({message:'token missing'});
        }
    }else{
        return res.status(403).json({ message: 'user not authonticated' });
    }
}

module.exports = Authentication;