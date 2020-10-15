exports.postCreateCookie  = (req, res, next) => {
    console.log('Cookie created!')
};

exports.postStyle = (req, res, next) => {
    req.session.style = req.body.css_style;
    res.redirect('/ta05');
};

exports.resetSession= (req, res, next) => {
    if (req.body.reset === 'true') {
        req.session.destroy(() => {
            res.redirect('/ta05');    
        })
    } else {
        res.redirect('/ta05');
    }
};

exports.getIndex = (req, res, next) => {
    if (req.session.counter === undefined) {
        req.session.counter = 0;
    }
    if (!req.session.style === undefined) {
        req.session.counter = 0;
    }
    res.render('pages/teamActivities/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05',
        style: req.session.style,
        counter: req.session.counter
    });
};

//TA04 PLACEHOLDER
/*const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});

console.log(req.session.style);

exports.postLogin = (req, res, next) => {
    req.session.style;
    res.redirect('/');
};

module.exports = router;*/