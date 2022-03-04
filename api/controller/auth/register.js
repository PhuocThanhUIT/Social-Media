const User = require ('../../models/User');
const CryptoJS = require("crypto-js");

exports.register =async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try{
        const user = await newUser.save();
        const {password,...info}=user._doc;
        res.status(200).json({...info});
    } catch(err){
        res.status(500).json(err);
    }
}