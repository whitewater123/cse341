//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();






router.get('/',(req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 3', 
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        fileData: req.body,
    });
    return res.end();
});

module.exports = router;