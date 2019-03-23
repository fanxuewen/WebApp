const express = require('express');

const path = require('path');
var router = express.Router();
const readFilePromise = require('fs-readfile-promise');


router.get('/',function(req,res,next){
  
   readFilePromise(path.resolve(__dirname, "../data/phones.json"),'utf8').then(function(data){
      
    data=JSON.parse(data).result;
   
    res.send(JSON.stringify(data));
   });
})

module.exports = router;
