const express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let id = req.query.id;
  
  let news = fs.readFileSync(path.resolve(__dirname, "../data/news.json"), "utf8");

  if (id) {
    let returnValue = {};
    let arr = JSON.parse(news).result;
    id = parseInt(id)
    arr = arr.filter(function (item) {
      return item.id === id;
    });

    if (arr.length == 0) {
      res.send(JSON.stringify({ "success": false, "message": "该文章不存在" }));
    } else {

      let newsinfo = fs.readFileSync(path.resolve(__dirname, "../data/newsinfo.json"), "utf8");
      newsinfo = JSON.parse(newsinfo).result;
      for (let i = 0; i < newsinfo.length; i++) {
        if (newsinfo[i].id === id) {
          returnValue.content = newsinfo[i].content;
          returnValue.id = id;
          returnValue.success = true;
          returnValue.clickTimes = arr[0].clickTimes;
          returnValue.postTime = arr[0].postTime;
          returnValue.title = arr[0].title;
          break;
        }
      }
      res.send(JSON.stringify(returnValue));
    }

  } else {
    res.send(news);
  }


});

module.exports = router;
