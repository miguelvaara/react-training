var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Tästä tulee sun kirjahylly!');
});

module.exports = router;
