const router = require("express").Router();

const professional = require("./professional")

routes.get('/', (req, res) => {
    res.send('Week 2 Team assignment home page');
  });
  
router.use('/professional', professional);

module.exports = router;