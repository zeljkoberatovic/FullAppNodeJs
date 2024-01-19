const mysql = require('mysql2');
const db = require('../../config/db_connection');

const createGrad = (req, res) => {
    let name = req.body.name;
    let zip = req.body.zip
db.query(
        'INSERT INTO sity (name, zip) VALUES (?, ?)',
               [name, zip],
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

module.exports = createGrad;