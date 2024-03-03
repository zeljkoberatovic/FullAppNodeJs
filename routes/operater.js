const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/operater/operaterController"));

module.exports = router;