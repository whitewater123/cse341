const Product = require('../models/pr03MDL');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('pages/pr03VIW', { 
            title: 'Prove 03', 
            path: '/pr03', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    });
};