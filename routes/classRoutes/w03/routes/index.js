const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');

routes.use('/models', models);
routes.use('/cars', cars);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
  //res.render ejs with buttons instead of this res.status
});

module.exports = routes;
