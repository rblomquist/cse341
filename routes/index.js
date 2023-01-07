const routes = require('express').Router();
const jokes = require('../controllers');

routes.get('/', (req, res) => {
  res.send('Ricky Blomquist');
});

routes.get('/joke', jokes.displayJoke)

module.exports = routes;