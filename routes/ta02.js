const express = require('express');
const router = express.Router();
const users = ["Jane", "Bob", "Bill"];

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'User List', 
        path: '/ta02', // For pug, EJS 
        activeTA02: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
        addThis: req.body.u1,
        removeThis: req.body.u2,
    });
    return res.end();
});

router.post('/addUser',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Users Updated', 
        path: '/ta02', // For pug, EJS 
        activeTA02: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
        addThis: req.body.u1,
        removeThis: req.body.u2,
    });
    return res.end();
});

router.post('/removeUser',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Users Updated', 
        path: '/pr02', // For pug, EJS 
        activeTA02: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
        addThis: req.body.u1,
        removeThis: req.body.u2,
    });
    return res.end();
});

router.post('/editNames',(req, res, next) => {
    res.render('pages/ta02/t2input', { 
        title: 'Edit Users', 
        path: '/pr02', // For pug, EJS 
        activeTA02: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
        addThis: req.body.u1,
        removeThis: req.body.u2,
    });
    return res.end();
});

module.exports = router;