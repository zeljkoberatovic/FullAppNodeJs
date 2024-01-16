const express = require("express");
const db = require('./config/db-connection');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res, next) => {
    res.send("Ok");
})

app.listen(3000, () =>{
    console.log('Listening on Port 3000');
});
