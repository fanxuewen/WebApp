const express = require('express');

const path = require('path');
var router = express.Router();
const readFilePromise = require('fs-readfile-promise');


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

});
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
router.get('/pictureinfo',function(req,res,next){
  let id=parseInt(req.query.id) ;
  let typeid=parseInt(req.query.typeid) ;
   readFilePromise(path.resolve(__dirname, "../data/pictureinfo.json"),'utf8').then(function(data){
      
    data=JSON.parse(data).result;
    let pictureinfo={success:false,content:{}};
    for(let i=0;i<data.length;i++){
      
        if(data[i].id==id&&data[i].typeid==typeid){
          pictureinfo.content=data[i];
          pictureinfo.success=true;
          break;
        }
    }
    res.send(JSON.stringify(pictureinfo));
   });
})
router.get('/picturepreview',function(req,res,next){
  let typeid=parseInt(req.query.typeid) ;
   readFilePromise(path.resolve(__dirname, "../data/picturepreview.json"),'utf8').then(function(data){
   data=JSON.parse(data).result;
   let result=[];
    for(let i=0;i<data.length;i++){
      
        if(data[i].typeid==typeid){
          result=result.concat(data[i].images) ;
         
          break;
        }
    }
    res.send(JSON.stringify(result));
   });
})
module.exports = router;
