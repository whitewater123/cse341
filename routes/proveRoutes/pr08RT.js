const express = require('express');
const router = express.Router();
const pr08Controller = require('../../controllers/pr08CTR.js');

router.get('/', pr08Controller.getProducts);

module.exports = router;