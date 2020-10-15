const routes = require('express').Router();
const ta05Controller = require('../../../controllers/ta05.js');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
  //res.render ejs with buttons instead of this res.status
});

routes.post('/create-cookie', ta05Controller.postCreateCookie);

routes.post('/change-style', ta05Controller.postStyle);

routes.post('/counter', ta05Controller.postCounter);

routes.post('/reset', ta05Controller.resetSession);

routes.get('/', ta05Controller.getIndex);

module.exports = routes;