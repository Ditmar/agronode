var express = require('express');
var router = express.Router();
const ARTICULE = require("../database/articuleSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  ARTICULE.find({}).exec((err, docs) => {
    console.log(docs);
    var a = 0;
    res.render('index', {info: docs[0].contentdom});
  });
});
router.get('/programa', function(req, res, next) {
  ARTICULE.find({}).exec((err, docs) => {
    console.log(docs);
    var a = 0;
    res.render('programa', {info: docs[1].contentdom});
  });
  //console.log("In here man ");
});

module.exports = router;
