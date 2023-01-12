const router = require("express").Router();
const model = require("../modules/professional");

router.get("/:id", model.getProfessional);

module.exports = router;