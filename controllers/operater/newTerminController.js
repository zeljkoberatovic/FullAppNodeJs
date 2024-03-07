const moment = require('moment');
const mysql = require('mysql2');
const db = require('../../config/db_connection');

const newTerminController = (req, res) => {
     let user = req.session.user;
    // Pretvaranje datuma iz teksta u JavaScript Date objekt
    const datumZakazivanja = moment(req.body.datum_zakazivanja, 'DD/MM/YYYY').toDate();
    // Formatiranje datuma prema MySQL formatu (YYYY-MM-DD)
    const mysqlDatum = moment(datumZakazivanja).format('YYYY-MM-DD');

    const query = `
        INSERT INTO termini 
            (ime_stranke, prezime_stranke, godiste_stranke, ime_supruznika, prezime_supruznika,
            godiste_supruznika, fiksni_telefon, mobilni_telefon, adresa, datum_zakazivanja,
            vreme_termina, savetnik, grad, djeca, operacije, terapija, napomena, active,
            vrednost_ugovora, razlog, ulaz, proizvod, operater) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        req.body.ime_stranke,
        req.body.prezime_stranke,
        req.body.godiste_stranke,
        req.body.ime_supruznika,
        req.body.prezime_supruznika,
        req.body.godiste_supruznika,
        req.body.fiksni_telefon,
        req.body.mobilni_telefon,
        req.body.adresa,
        //req.body.datum_zakazivanja,
        //datum_zakazivanja: 
        mysqlDatum,
        req.body.vreme_termina,
        req.body.savetnik,
        req.body.grad,
        req.body.djeca,
        req.body.operacije,
        req.body.terapija,
        req.body.napomena,
        true,
        0,
        '',
        false,
        '',
        user.first_name,
    ];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Greška prilikom dodavanja novog termina:', err);
            res.status(500).send('Došlo je do greške prilikom dodavanja novog termina.');
        } else {
            res.redirect("/operater");
        }
    });
};

module.exports = newTerminController;
