const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/p1input', { 
        title: 'Prove 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
    return res.end();
});

router.post('/p1submit',(req, res, next) => {
    res.render('pages/p1display', { 
        title: 'You said this:', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.m1,
        input2: req.body.m2
    });
    return res.end();
});

module.exports = router;