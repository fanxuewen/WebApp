const express = require('express');

const path = require('path');
var router = express.Router();
const readFilePromise = require('fs-readfile-promise');


router.get('/',function(req,res,next){
  
   readFilePromise(path.resolve(__dirname, "../data/phones.json"),'utf8').then(function(data){
      
    data=JSON.parse(data).result;
   
    res.send(JSON.stringify(data));
   });
});
router.get('/details',function(req,res,next){
   let id=parseInt(req.query.id) ;
   let result={};
   readFilePromise(path.resolve(__dirname, "../data/phonedetail.json"),'utf8').then(function(data){
      
    data=JSON.parse(data).result;
    for(let i=0;i<data.length;i++){
      if(data[i].id==id){
         result=data[i];
       
         break;
      }
    }
    res.send(JSON.stringify(result));
   });
});

module.exports = router;
