const mysql = require('mysql2');
const db = require('../../config/db_connection');

const deleteProizvodController = (req, res) => { 
   
    const proizvodId = req.params.proizvodId; 

    const connection = mysql.createConnection(db);

  connection.query('DELETE FROM users WHERE id = ?', [proizvodId], (err, results) => {
        connection.end();  // Zatvorite vezu nakon izvršenja upita

        
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ message: "ok" });
        }
        
    });
};


module.exports = deleteProizvodController;