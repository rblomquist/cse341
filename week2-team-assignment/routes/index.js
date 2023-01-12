const router = require("express").Router();

const professional = require("./professional")

router.use('/professional', professional);

module.exports = router;