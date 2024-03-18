require('dotenv').config();
const express = require("express");
const app = express();
const routes = require('./routes');
const session = require("express-session");

const HALF_DAY = 1000 * 60 * 60 * 12; //= 12h

const {
    PORT = 3000,
    NODE_ENV = "development",
    SESS_NAME = "sid",
    SESS_SECRET = "full_app_nodejs",
    SESS_LIFETIME = HALF_DAY
} = process.env;
const IN_PROD = NODE_ENV == "Production";

console.log("PORT:", PORT);
console.log("NODE_ENV:", NODE_ENV);
console.log("SESS_NAME:", SESS_NAME);
console.log("SESS_SECRET:", SESS_SECRET);
console.log("SESS_LIFETIME:", SESS_LIFETIME);
console.log("IN_PROD:", IN_PROD);

app.use(express.urlencoded({ extended: false})); //mozemo da citamo iz samog bodija podatke sto nam stignu iz forme
app.use(express.json());
app.use(express.static( __dirname + "/public"));


app.use(session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: parseInt(process.env.SESS_LIFETIME), // vrednost mora biti broj
        sameSite: true,
        secure: process.env.IN_PROD // Ova vrednost mora da bude boolean
    }
}));

app.set("view engine", "ejs");
app.use('/', routes);


app.listen(3000, function() {
    console.log('Listening on Port 3000');
});
