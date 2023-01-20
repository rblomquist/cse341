const router = require("express").Router();
const test = require("../modules/contacts");

// get all
router.get("/", test.getAll)

// get one
router.get("/:id", test.getSingle)


// create new

// update one

// delete one

module.exports = router;