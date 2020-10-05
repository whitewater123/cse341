const express = require('express');
const router = express.Router();
const pr03Controller = require('../../controllers/pr03CTR.js');

router.get('/', pr03Controller.getProducts);

module.exports = router;