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

app.use(express.urlencoded({ extended: false})); //mozemo da citamo iz samog bodija podatke sto nam stignu iz forme
app.use(express.json());
app.use(express.static( __dirname + "/public"));


app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}));



app.set("view engine", "ejs");
app.use('/', routes);




app.listen(3000, function() {
    console.log('Listening on Port 3000');
});
