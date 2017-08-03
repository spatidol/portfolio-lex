var express = require('express');
var router = express.Router();
var magnets = require("../magnets.json");
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.json(magnets);
  fs.readFile('magnets.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object (array)
    res.json(obj);
    }
  });
});

router.post('/', function(req, res, next) {
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var selected = req.query.key;

  //find magnet in database and update position
  fs.readFile('magnets.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object (array)
    console.log('inside readfile')
    obj.forEach(singleObj => {
      if(singleObj[selected]) {
        console.log("found", singleObj[selected])
        singleObj.positionX = x;
        singleObj.positionY = y;
        return;
      }
    })

    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('magnets.json', json, 'utf8', function() {
      res.send("ya?")
    }); // write it back
  }});

})


router.post('/add', function(req, res, next) {
  var text = req.query.text;
  console.log("WHAT???", text)
  fs.readFile('magnets.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object (array)
    var key = obj.length;
    console.log("KEY", key)
    obj.push({              //add new element
      [key]: text,
      positionX: 238,
      positionY: 90,
      class: "handle"
    });
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('magnets.json', json, 'utf8', function() {
      res.send("success")
    }); // write it back
  }});

})


module.exports = router;
