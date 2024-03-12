const mysql = require('mysql2');
const db = require('../../config/db_connection');

const deleteUserController = (req, res) => {  
//const user = req.params.user; 
    let user = results[0];
    req.session.user = user;

    const connection = mysql.createConnection(db);
    connection.query('DELETE FROM users WHERE id = ?', [user], (err, results) => {
        connection.end();  // Zatvara vezu nakon izvršenja upita

    if (err) {
            res.status(500).json({ error: err });
    } else {
            res.json({ message: "ok" });
        }
        
    });
};


module.exports = deleteUserController;