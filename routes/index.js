const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ricky Blomquist');
});

module.exports = routes;