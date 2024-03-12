const mysql = require('mysql2');
const db = require('../../config/db_connection');

const izvestajController = (req, res) => {
    let id = req.params.id;

    // Izvršavanje SQL upita za ažuriranje aktivnosti termina
    db.promise().execute('UPDATE termini SET active = ? WHERE id = ?', [false, id])
        .then(([rows, fields]) => {
            // Preusmeravanje nakon uspešnog ažuriranja
            res.redirect("/savetnik");
        })
        .catch((err) => {
            console.error('Greška prilikom ažuriranja termina:', err);
            res.status(500).send('Došlo je do greške prilikom ažuriranja termina.');
        });
};

module.exports = izvestajController;
