const routes = require('express').Router();
const jokes = require('../controllers');

routes.get('/', (req, res) => {
  res.send('Ricky Blomquist');
});

routes.get('/', jokes.displayJoke);

module.exports = routes;