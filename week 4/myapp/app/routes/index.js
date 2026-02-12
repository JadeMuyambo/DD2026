var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
     name: "Jade Muyambo",
    image: "/image/user.jpg",
     });
});

module.exports = router;
