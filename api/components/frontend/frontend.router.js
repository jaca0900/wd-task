const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Express' });// index
});

router.get('/hello', (req, res) => {

  res.render('hello', {});
})

module.exports = router;
