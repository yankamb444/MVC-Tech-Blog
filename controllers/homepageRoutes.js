const router = require('express').Router();



router.get('/', (req, res) => {
res.render('partials/homePage')
    
  });


  module.exports = router;