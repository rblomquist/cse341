const router = require("express").Router();
const contacts = require("./contacts");

router.get('/', (req, res) => {
    res.send('Home Page');
  });

router.use("/contact", contacts)

module.exports = router;