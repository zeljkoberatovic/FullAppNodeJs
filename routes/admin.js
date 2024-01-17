const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/admin/adminController"));






module.exports = router;