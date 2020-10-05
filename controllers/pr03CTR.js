const Product = require('../models/pr03MDL');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        /*let retrievedData = global.jsonResponse.filter(x => x.name.toLowerCase().includes(searchedValue.toLowerCase()))
    console.log(retrievedData)*/
        res.render('pages/pr03VIW', { 
            title: 'Prove 03', 
            path: '/pr03', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
            data: products,
        });
    });
};