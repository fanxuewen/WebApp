var express = require('express');
var fs=require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  fs.readFile("./data/header.json",function(err,data){
      if(err){
        console.log(err);
      }
      res.send(data.toString());
  })
  
});

module.exports = router;
