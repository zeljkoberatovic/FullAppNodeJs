const mysql = require('mysql2/promise');
const db = require('../../config/db_connection');

const deleteUserController = async (req, res) => {
    const userId = req.params.userId; 
    try {
        const connection = await mysql.createConnection(db);
        // Izvršavanje upita za brisanje korisnika
        const [result, fields] = await connection.execute('DELETE FROM users WHERE id = ?', [userId]);

        await connection.end(); // Zatvara vezu sa bazom podataka

        res.json({ message: "ok" }); // Ako je brisanje uspešno, vraćamo poruku "ok"
    } catch (error) {
        res.status(500).json({ error: error.message }); // Ako dođe do greške, vraćamo status 500 i poruku o grešci
    }
};

module.exports = deleteUserController;
