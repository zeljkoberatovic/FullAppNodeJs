const express = require('express');
const router = express.Router();
//const db = require('../config/db_connection');



router.use("/", require("./home"));

router.use("/login", require("../controllers/loginController"));

router.use("/admin", require("./admin"));

router.use("/operater", require("./operater"));




router.use("/logout", require("./logout"));

  

module.exports = router;