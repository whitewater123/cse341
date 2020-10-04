const express = require('express');
const router = express.Router();
const pr03Controller = require('../../controllers/pr03CTR.js');

router.get('/pr03', pr03Controller.getProducts);
router.post('/',(req, res, next) => {
    let retrievedData = global.jsonResponse.filter(x => x.name.toLowerCase().includes(searchedValue.toLowerCase()))
    console.log(retrievedData)
    res.render('pages/pr03VIW', {
        name: 'JSON Search',
        data: retrievedData,
        path: '/pr03'
});
return res.end();
});
/*var jsonEngine = require('../../controllers/pr03CTR.js');

router.get('/', jsonEngine.processJson)
      .post('/',(req, res, next) => {
          let retrievedData = global.jsonResponse.filter(x => x.name.toLowerCase().includes(searchedValue.toLowerCase()))
          console.log(retrievedData)
          res.render('pages/pr03VIW', {
              name: 'JSON Search',
              data: retrievedData,
              path: '/pr03'
    });
    return res.end();
});*/
module.exports = router;