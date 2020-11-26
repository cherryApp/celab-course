var express = require('express');
var router = express.Router();
const User = require('../model/user');

/* GET api page. */
router.get('/', function(req, res, next) {
  res.json({
      message: 'Api endpoint works.',
  });
});

// Create a new user.
router.post('/user', async (req, res, next) => {
    console.log( req.body );
    const user = new User(req.body);
    try {
        await user.save();
    } catch(e) {
        return res.json({success: false, error: e});
    }
    res.json({ success: true });
});

module.exports = router;
