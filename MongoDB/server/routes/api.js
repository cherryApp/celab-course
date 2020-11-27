var express = require('express');
var router = express.Router();
const User = require('../model/user');
const fs = require('fs');
const path = require('path');

/* GET api page. */
router.get('/', function(req, res, next) {
  res.json({
      message: 'Api endpoint works.',
  });
});

// Get all users.
router.get('/user', async (req, res, next) => {
    let users = [];
    try {
        users = await User.find();
    } catch(e) {
        res.statusCode = 400;
        return res.json({success: false, error: e});
    }
    res.json({ success: true, data: users });
});

// Get one user by id.
router.get('/user/:id', async (req, res, next) => {
    const { id } = req.params;
    let user = null;
    try {
        user = await User.findById(id);
    } catch(e) {
        res.statusCode = 400;
        return res.json({success: false, error: e});
    }
    res.json({ success: true, data: user });
});

// Get users by regex query.
router.post('/user/find', async (req, res, next) => {
    let users = [];
    try {
        for (const key in req.body) {
            if (typeof req.body[key] === 'string') {
                req.body[key] = new RegExp(req.body[key], 'gi');
            }
        }
        users = await User.find(req.body);
    } catch(e) {
        res.statusCode = 400;
        return res.json({success: false, error: e});
    }
    res.json({ success: true, data: users });
});

// Create a new user.
router.post('/user', async (req, res, next) => {
    console.log( req.body );
    const user = new User(req.body);
    try {
        await user.save();
    } catch(e) {
        res.statusCode = 400;
        return res.json({success: false, error: e});
    }
    res.json({ success: true, data: user });
});

// Update a User.
router.put('/user/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        await user.update(req.body);
    } catch(e) {
        res.statusCode = 400;
        return res.json({success: false, error: e});
    }
    res.json({ success: true });
});

// Delete a new user.
router.delete('/user/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await User.deleteOne({_id: id});
    } catch(e) {
        res.statusCode = 400;
        return res.json({success: false, error: e});
    }
    res.json({ success: true });
});

router.get('/user/fill/done', async (req, res, next) => {
    try {
        let userList = fs.readFileSync(path.join(__dirname, '../../../server/data.json'), 'utf8');
        const { users } = JSON.parse(userList);
        await User.insertMany(users);
    } catch(e) {
        res.statusCode = 400;
        return res.json({success: false, error: e});
    }
    res.json({success: true});
});

module.exports = router;

/**
 * Example request.
fetch('/api/user/find', {
    method: 'POST',
    body: JSON.stringify({email: 'edu$'}),
    headers: { 'Content-Type': 'application/json' }
}).then( r => r.json() )
.then( j => console.log(j) )
.catch( e => console.error(e) );
 */
