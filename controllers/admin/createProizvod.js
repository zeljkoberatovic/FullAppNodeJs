const mysql = require('mysql2');
const db = require('../../config/db_connection');

const createProizvod = (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
      
db.query('INSERT INTO product (name, price) VALUES ( ?,?)',[name, price],
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

module.exports = createProizvod;