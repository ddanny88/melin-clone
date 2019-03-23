require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');



// const { checkCart } = require('./middleware/authMiddleware');

const app = express();
app.use(json());

// EXPRESS SESSION: 
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false, 
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000
        }
    })
);


//ENDPOINT ROUTES: 








app.listen(() => console.log(`Listening on port ${process.env.SERVER_PORT}...`))