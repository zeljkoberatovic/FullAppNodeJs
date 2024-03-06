const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/savetnik/savetnikController"));

router.get("/termin/:id", require("../controllers/savetnik/showTerminController"));


module.exports = router;