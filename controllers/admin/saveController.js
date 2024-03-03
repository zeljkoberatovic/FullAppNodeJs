const mysql = require('mysql2');
const db = require('../../config/db_connection');

const saveController = (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let password = req.body.password;
    let role = req.body.role;
    // console.log(first_name, last_name, password, role);
db.query('INSERT INTO users (first_name, last_name, password, role) VALUES (?, ?, ?, ?)',
        [first_name, last_name, password, role],
        (err, results) => {
            if (err) {
                // obradi grešku, na primer, prikaži stranicu sa greškom
                console.error(err);
                res.status(500).send('Interna server greška');
            } else {
                res.redirect("/admin");
            }
        }
    );
};

module.exports = saveController;
