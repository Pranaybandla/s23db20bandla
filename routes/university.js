var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('university', { title: 'Search results of University.' });
});

module.exports = router;
