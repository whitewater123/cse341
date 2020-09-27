const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/pr02/bookInput', { 
        title: 'Enter Book Info', 
        path: '/pr02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
    return res.end();
});

router.post('/bookDisplay',(req, res, next) => {
    res.render('pages/pr02/bookDisplay', { 
        title: 'About Your Book', 
        path: '/pr02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        bookTitle: req.body.BkT,
        bookSummary: req.body.BkS,
    });
    return res.end();
});

module.exports = router;