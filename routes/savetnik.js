const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/savetnik/savetnikController"));


module.exports = router;