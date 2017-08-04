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
    console.log("FETTTTCHING NEW", obj)
    res.json(obj);
    }
  });
});

router.post('/', function(req, res, next) {
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var selected = req.query.key;

  if (!selected) return res.send('no move');

  //find magnet in database and update position
  fs.readFile('magnets.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object (array)
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
  fs.readFile('magnets.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object (array)
    var lastObj = obj[obj.length-1];
    var key = parseInt(Object.keys(lastObj)[0]) + 1;
    key.toString();
    obj.push({              //add new element
      [key]: text,
      positionX: 100,
      positionY: 300,
      class: "handle"
    });
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('magnets.json', json, 'utf8', function() {
      res.send("success")
    }); // write it back
  }});

})

router.post('/delete', function(req, res, next) {
  var id = req.query.delete;
  fs.readFile('magnets.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object (array)
    obj.forEach((singleObj, idx) => {
      if(singleObj[id]) {
        obj.splice(idx, 1);
        return;
      }
    })
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('magnets.json', json, 'utf8', function() {
      res.json({success: true})
    }); // write it back
  }});

})


module.exports = router;
