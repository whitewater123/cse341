const express = require('express');
const router = express.Router();
const pr09Controller = require('../../controllers/pr09CTR.js');

router.get('/', pr09Controller.getPokemon);

router.get('/prev', pr09Controller.prevPokemon);

router.get('/next', pr09Controller.nextPokemon);



module.exports = router;