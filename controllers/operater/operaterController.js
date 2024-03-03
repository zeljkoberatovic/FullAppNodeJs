const mysql = require('mysql2');
const db = require('../../config/db_connection');

const operaterController = (req, res) => {
    let user = req.session.user;
    res.render("operater/index")
};

module.exports = operaterController;