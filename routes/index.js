const router = require("express").Router();
const week1 = require("../week1/routes");
const week2 = require("../week2-personal-assignment/routes")

router.get('/', (req, res) => {
    res.send('week1');
  });

  
router.use("/week1", week1);
router.use("/week2", week2);



module.exports = router;