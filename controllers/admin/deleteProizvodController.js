const mysql = require('mysql2');
const db = require('../../config/db_connection');

const deleteProizvodController = async (req, res) => { 
    const proizvodId = req.params.proizvodId; 
    const connection = mysql.createConnection(db);

    try {
        const result = await new Promise((resolve, reject) => {
            connection.query('DELETE FROM users WHERE id = ?', [proizvodId], (err, results) => {
                if (err) reject(err);
                else resolve(result);
            });
        });

        connection.end();  

        res.render("admin");
        res.json({ message: "ok" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

module.exports = deleteProizvodController;
