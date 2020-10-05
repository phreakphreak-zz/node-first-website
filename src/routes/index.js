const express =require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('index',{title:"first WebSite JS"});
});


router.get('/contact',(req, res)=>{
    res.render('contact',{title:"contact pages JS"});
});
module.exports = router;