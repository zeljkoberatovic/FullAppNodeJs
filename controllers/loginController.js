const mysql = require('mysql2');
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "full_app_nodejs"
});

const loginController = (req, res) => {
  // Preuzimanje podataka iz req.body
  let nameIzForme = req.body.name;
  let passIzForme = req.body.password;
// Izvršavanje SQL upita za pretragu korisnika
  db.query('SELECT * FROM users WHERE first_name = ? AND password = ?', [nameIzForme, passIzForme], (err, results) => {
    if (err) {
      console.error('Greška prilikom izvršavanja upita:', err);
      res.redirect("/");
    } else {
      if (results.length === 1) {
        // Pronađen korisnik
        let user = results[0];
        //req.session.user = user;
        if (user.role === "admin") {
          res.redirect("/admin");
        } else {
          res.redirect("/");
        }
      } else {
        // Podaci nisu tačni
        res.redirect("/");
      }
    }
  });
};

module.exports = loginController;