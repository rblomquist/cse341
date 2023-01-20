const router = require("express").Router();
const week1 = require("../week1/routes");
const week2 = require("../week2-personal-assignment/routes");
const week3 = require("../week3/routes");

router.get('/', (req, res) => {
    res.send('week1');
  });

  
router.use("/week1", week1);
router.use("/week2", week2);
router.use("/week3", week3);




module.exports = router;