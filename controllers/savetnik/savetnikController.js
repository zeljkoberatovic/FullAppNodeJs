const mysql = require('mysql2');
const db = require('../../config/db_connection');

const savetnikController = (req, res) => {
    let user = req.session.user;

    res.render("savetnik/index");
};

module.exports = savetnikController;