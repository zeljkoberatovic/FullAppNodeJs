const mysql = require('mysql2');
const db = mysql;

const adminController = (req, res) => {
    res.render("admin/adminDashboard");
}

module.exports = adminController;