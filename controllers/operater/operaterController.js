const mysql = require('mysql2');
const db = require('../../config/db_connection');

const operaterController = async (req, res) => {
    try {
        // Provera podataka o korisniku iz sesije
        let user = req.session.user;
        //console.log(user);
        
    if (!user || !user.first_name) {
            console.error('Podaci o korisniku nisu ispravni ili nisu postavljeni.');
            res.status(500).send('Došlo je do greške prilikom dohvatanja podataka o korisniku.');
            return;
        }

        // Upit za dohvat svih gradova
        const [sity, sityFields] = await db.promise().query('SELECT * FROM sity');

        // Upit za dohvat svih savetnika
        const [savjetnici, savjetniciFields] = await db.promise().query('SELECT * FROM users WHERE role = "savetnik"');

        // Upit za dohvat termina operatera
        const [termini, terminiFields] = await db.promise().query('SELECT * FROM termini WHERE operater = ?', [user.first_name]);

        // Renderovanje stranice
        res.render("operater/index", {
            name: user.first_name,
            savetnici: savjetnici,
            gradovi: sity,
            brojTermina: termini.length,
        });
    } catch (err) {
        console.error('Greška prilikom dohvatanja podataka:', err);
        res.status(500).send('Došlo je do greške prilikom dohvatanja podataka.');
    }
};

module.exports = operaterController;
