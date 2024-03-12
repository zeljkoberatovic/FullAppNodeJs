const mysql = require('mysql2');
const db = require('../../config/db_connection');

const savetnikTerminController = async (req, res) => {
    try {
        let name = req.params.name;
        let user = req.session.user;

        // Izvršavanje SQL upita za pronalaženje termina za određenog savetnika
        const [rows, fields] = await db.promise().query('SELECT * FROM termini WHERE savetnik = ?', [name]);
        
        res.render("admin/savetnikTermini", { termini: rows });
    } catch (err) {
        console.error('Greška prilikom dohvatanja termina:', err);
        res.status(500).send('Došlo je do greške prilikom dohvatanja termina.');
    }
};

module.exports = savetnikTerminController;

