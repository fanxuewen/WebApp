const express = require('express');

const path = require('path');
var router = express.Router();
const readFilePromise = require('fs-readfile-promise');

/* GET users listing. */
router.get('/', function (req, res, next) {
  let id =parseInt(req.query.id) ;
  

  Promise.all([readFilePromise(path.resolve(__dirname, "../data/picturesheader.json"),'utf8'),
  readFilePromise(path.resolve(__dirname, "../data/pictures.json"),'utf8')]).then(function(data){
     let headers =JSON.parse(data[0]).result;
     let pictures=JSON.parse(data[1]).result;
     let 
     if(id===0){
       pictures
     }
    console.log(data.toString());
  }).catch(function(err){
    console.log(err);
  })
  //let arr = JSON.parse(pictures).result;
  res.send(JSON.stringify([]));
  // if (id) {
  //   let returnValue = {};
    
  //   id = parseInt(id)
  //   arr = arr.filter(function (item) {
  //     return item.id === id;
  //   });

  //   if (arr.length == 0) {
  //     res.send(JSON.stringify({ "success": false, "message": "该文章不存在" }));
  //   } else {

  //     let picturesinfo = fs.readFileSync(path.resolve(__dirname, "../data/picturesinfo.json"), "utf8");
  //     picturesinfo = JSON.parse(picturesinfo).result;
  //     for (let i = 0; i < picturesinfo.length; i++) {
  //       if (picturesinfo[i].id === id) {
  //         returnValue.content = picturesinfo[i].content;
  //         returnValue.id = id;
  //         returnValue.success = true;
  //         returnValue.clickTimes = arr[0].clickTimes;
  //         returnValue.postTime = arr[0].postTime;
  //         returnValue.title = arr[0].title;
  //         break;
  //       }
  //     }
  //     res.send(JSON.stringify(returnValue));
  //   }

  // } else {
  //   res.send(pictures);
  // }


});

module.exports = router;
