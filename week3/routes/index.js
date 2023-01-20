const routes = require('express').Router();

const contactRouter = require("./contacts");
const model = require("../modules/contacts");


routes.get('/', (req, res) => {
  res.send('week3');
});


routes.get('/contact', model.getAll);

routes.post("/contact/add", model.addContact);

routes.delete("/contact/delete/:id", model.deleteContact);

routes.put("/contact/update/:id", model.updateContact)


module.exports = routes
