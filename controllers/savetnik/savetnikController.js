const mysql = require('mysql2');
const db = require('../../config/db_connection');

const savetnikController = async (req, res) => {
    try {
        // Provera podataka o korisniku iz sesije
        let user = req.session.user;

        if (!user || !user.first_name) {
            console.error('Podaci o korisniku nisu ispravni ili nisu postavljeni.');
            res.status(500).send('Došlo je do greške prilikom dohvatanja podataka o korisniku.');
            return;
        }

        // Upit za dohvat svih gradova
        const [sity, sityFields] = await db.promise().query('SELECT * FROM sity');

        // Upit za dohvat svih savetnika
        const [savjetnici, savjetniciFields] = await db.promise().query('SELECT * FROM users WHERE role = "savetnik"');

        // Upit za dohvat termina savetnika
        const [termini, terminiFields] = await db.promise().query('SELECT * FROM termini WHERE savetnik = ? AND active = ?', 
        [`${user.first_name} ${user.last_name}`, true]);

        // Renderovanje stranice
        res.render("savetnik/index", {
            name: user.first_name,
            savetnici: savjetnici,
            gradovi: sity,
            brojTermina: termini.length,
            termini: termini,
        });
    } catch (err) {
        console.error('Greška prilikom dohvatanja podataka:', err);
        res.status(500).send('Došlo je do greške prilikom dohvatanja podataka.');
    }
};

module.exports = savetnikController;

