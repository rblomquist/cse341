const router = require("express").Router();
const contacts = require("./contacts");

router.get('/', (req, res) => {
    res.send('Home Page');
  });

router.use("/contacts", contacts)

module.exports = router;