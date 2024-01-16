const mysql = require('mysql2');

// Konfiguracija povezivanja sa bazom podataka
const db = mysql.createPool({
    host: "localhost",
    user: "root", 
    password: "root", 
    database: "full_app_nodejs", 
});

db.getConnection(() =>{
console.log('connect to db successfully');
});

// Izvezi konekciju za korišćenje u drugim delovima aplikacije
module.exports = db;
