const express = require('express');

const path = require('path');
var router = express.Router();
const readFilePromise = require('fs-readfile-promise');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Promise.all([
    readFilePromise(path.resolve(__dirname, "../data/picturesheader.json"),'utf8'),
    readFilePromise(path.resolve(__dirname, "../data/pictures.json"),'utf8')])
    .then(function(data){
     let headers =JSON.parse(data[0]).result;
     let temp=JSON.parse(data[1]).result;
     let pictures=[];
     for (let i=0;i<temp.length;i++){
      pictures= pictures.concat(temp[i].pictures)
     }
     res.send(JSON.stringify([headers,pictures]));
    
  }).catch(function(err){
    console.log(err);
  })

  router.get('/type',function(req,res,next){
    let id=parseInt(req.query.id) ;
     readFilePromise(path.resolve(__dirname, "../data/pictures.json"),'utf8').then(function(data){
        
      data=JSON.parse(data).result;
      let pictures=[];
      for(let i=0;i<data.length;i++){
        if(id===0){
           pictures=  pictures.concat(data[i].pictures);
       }else{
          if(data[i].typeId==id){
            pictures=  pictures.concat(data[i].pictures);
            break;
           }
        }
         
      }
      res.send(JSON.stringify(pictures));
     });
  })
  


});

module.exports = router;
