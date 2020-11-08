const Product = require('../models/pr08MDL');

const ITEMS_PER_PAGE = 2;

exports.getProducts = (req, res, next) => {
    const page = +req.query.page || 1;
    Product.fetchAll(products => {
        res.render('pages/pr08VIW', { 
            title: 'Prove 08', 
            path: '/pr08', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
            data: products.slice(((page - 1) * ITEMS_PER_PAGE), (((page - 1) * ITEMS_PER_PAGE) + ITEMS_PER_PAGE)),
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page < products.length,
            hasPreviousPage: page > 1,
            nextPage: (page + 1),
            previousPage: (page - 1),
            lastPage: Math.ceil(products.length / ITEMS_PER_PAGE)
        });
    });
};