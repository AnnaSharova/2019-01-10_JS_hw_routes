const express = require('express');
const router = express.Router();

/* GET movie info. */
router.get('/', function(req, res, next) {
  res.render('movie', { title: 'Wicker Park', category: 'Drama', year: '2004', actors: ['Josh Hartnett', 'Rose Byrne'] });
});

module.exports = router;