var express = require('express');
var router = express.Router();

const db = require('../config/db')

console.log(db.user, db.password)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Tästä tulee sun kirjahylly!');
});

module.exports = router;
