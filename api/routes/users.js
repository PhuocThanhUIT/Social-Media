const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send("userrouter")
})

module.exports = router;