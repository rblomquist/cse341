const routes = require('express').Router();

const contactRouter = require("./contacts");

routes.use('/contact', contactRouter);

module.exports = routes
