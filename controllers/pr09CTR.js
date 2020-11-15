const Product = require('../models/pr09MDL');
const fetch = require('node-fetch');
const ITEMS_PER_PAGE = 10;
const pokemonList = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
let prevAPI;
let nextAPI;


exports.getPokemon = (req, res, next) => { 
    const page = +req.query.page || 1;   
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
.then(res => res.json())
.then(resData => 
    {
        nextAPI = resData.next;
        prevAPI = resData.previous;
        res.render('pages/pr09VIW', { 
    title: 'Prove 09', 
    path: '/pr09', // For pug, EJS 
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    data: resData.results,
    pokemonList: resData.results,
    hasPreviousPage: resData.previous,
    hasNextPage: resData.next

})
})
.catch(err => console.log(err));
};

exports.prevPokemon = (req, res, next) => { 
    const page = +req.query.page || 1;   
    fetch(prevAPI)
.then(res => res.json())
.then(resData => {
    nextAPI = resData.next;
        prevAPI = resData.previous;
    res.render('pages/pr09VIW', { 
    title: 'Prove 09', 
    path: '/pr09/prev', // For pug, EJS 
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    data: resData.results,
    hasPreviousPage: resData.previous,
    hasNextPage: resData.next
})
})
.catch(err => console.log(err));
};

exports.nextPokemon = (req, res, next) => { 
    const page = +req.query.page || 1;   
    fetch(nextAPI)
.then(res => res.json())
.then(resData => {
    nextAPI = resData.next;
        prevAPI = resData.previous;
    res.render('pages/pr09VIW', { 
    title: 'Prove 09', 
    path: '/pr09/next', // For pug, EJS 
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    data: resData.results,
    hasPreviousPage: resData.previous,
    hasNextPage: resData.next
})
})
.catch(err => console.log(err));
};
    //res.status(200).json({pokemon: [{title: 'Pokemon', content: 'Content'}]
//});



/*exports.getPokemon = (req, res, next) => {    
        res.status(200).json({pokemon: [{title: 'Pokemon', content: 'Content'}]
    });
};

exports.postPokemon = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Pokemon successully added!',
        pokemon: {id: new Date().toISOString(), title: title, content: content}
    });
};*/

/*exports.getPokemon = (req, res, next) => {
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
};*/

/*const Product = require('../models/pr09MDL');
const fetch = require('node-fetch');
const ITEMS_PER_PAGE = 2;


exports.getPokemon = (req, res, next) => {    
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
.then(res => res.json())
.then(resData => {res.render('pages/pr09VIW', { 
    title: 'Prove 09', 
    path: '/pr09', // For pug, EJS 
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    data: resData,
})
})
.catch(err => console.log(err));
    //res.status(200).json({pokemon: [{title: 'Pokemon', content: 'Content'}]
//});

};*/