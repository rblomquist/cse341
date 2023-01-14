const routes = require('express').Router();

const contactRouter = require("./contacts");

routes.get('/', (req, res) => {
    res.send('week2 home page');
  });
routes.use('/contact', contactRouter);

module.exports = routes
