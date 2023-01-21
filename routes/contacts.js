const router = require("express").Router();
const model = require("../modules/contacts");

// get all
router.get("/", model.getAll)

// get one
router.get("/:id", model.getSingle)

router.post("/add", model.addContact);

router.delete("/delete/:id", model.deleteContact);

router.put("/update/:id", model.updateContact)

module.exports = router;