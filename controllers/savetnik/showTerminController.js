const mysql = require('mysql2');
const db = require('../../config/db_connection');

const showTerminController = async (req, res) => {
    try {
        // Provera podataka o korisniku iz sesije
        let user = req.session.user;
        let id = req.params.id;
        

        if (!user || !user.first_name) {
            console.error('Podaci o korisniku nisu ispravni ili nisu postavljeni.');
            res.status(500).send('Došlo je do greške prilikom dohvatanja podataka o korisniku.');
            return;
        }

        // Upit za dohvat termina
        const [termin, terminFields] = await db.promise().query('SELECT * FROM termini WHERE id = ?', [id]);

        // Renderovanje stranice
        res.render("savetnik/showTermin", {
            name: user.first_name,
            termin: termin[0],
            
        });
    } catch (err) {
        console.error('Greška prilikom dohvatanja podataka za prikaz termina:', err);
        res.status(500).send('Došlo je do greške prilikom dohvatanja podataka za prikaz termina.');
    }
};

module.exports = showTerminController;
