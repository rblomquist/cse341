const router = require("express").Router();
const model = require("../modules/contacts");
const validate = require("../helper/validation-middleware");

// get all
router.get("/", model.getAll)

// get one
router.get("/:id", model.getSingle)

router.post("/add", validate.validate, model.addContact);

router.delete("/delete/:id", model.deleteContact);

router.put("/update/:id", validate.validate, model.updateContact)

module.exports = router;