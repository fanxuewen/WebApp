const express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let id = req.query.id;
  let pageIndex = req.query.pageIndex;
  let comments = fs.readFileSync(path.resolve(__dirname, "../data/comments.json"), "utf8");
  let arr = JSON.parse(comments).result;
  let returnValue = [];
  id = parseInt(id)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      returnValue = arr[i].comments;
      break;
    }

  }
  let leng = returnValue.length;
  if (leng > 0) {
    let start = (pageIndex - 1) * 10;
    let end = start + 10;
    if (start < leng) {
      end = end > leng ? leng : end;
      returnValue = returnValue.slice(start, end);
    } else {
      returnValue = [];
    }

  }
  res.send(JSON.stringify(returnValue));


});

router.post('/', function (req, res, next) {

  let params = req.body;
  let comments = fs.readFileSync(path.resolve(__dirname, "../data/comments.json"), "utf8");
  let data = JSON.parse(comments);
  let length = data.result.length
  let id = parseInt(params.id);
  let name='';
  for (let i = 0; i < length; i++) {
    if (data.result[i].id === id) {
      let randomName = ["本人", "杀人蜂", "库特", "客家话", "拮抗剂", "复核人", "陈晓旭", "有意", "么么", "萝莉"];
      let index = Math.floor(Math.random() * 10);
      name=randomName[index]
      params.comment.name = name;
      data.result[i].comments.unshift(params.comment);
      fs.writeFileSync(path.resolve(__dirname, "../data/comments.json"), JSON.stringify(data));
      break;
    }

  }
  res.send(JSON.stringify({ "success": true,name:name }));
});

module.exports = router;
