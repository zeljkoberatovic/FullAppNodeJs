const mysql = require('mysql2');
const db = require('../../config/db_connection');

const adminController = (req, res) => {
    let user = req.session.user;

    db.query('SELECT * FROM users', (err, users) => {
        db.query('SELECT * FROM sity', (err, sity) => {
            db.query('SELECT * FROM product', (err, product) => {
                let operateri = users.filter((user) => user.role == "operater");
                let savjetnici = users.filter((user) => user.role == "savetnik");


                res.render("admin/adminDashboard", {
                    name: user.first_name,
                    gradovi: sity,
                    proizvodi: product,
                    operateri: operateri,
                    savetnici: savjetnici,
                });
            });
        });

    });
};


module.exports = adminController;

