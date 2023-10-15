const express = require("express");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)
const multer = require("multer");
const parser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser"); // cookies
const jwt = require("jsonwebtoken");
require("./db");
var cors = require("cors"); // api json
require("dotenv").config();
var app = express();
// read secret key


var allowedOrigins = [
  "http://someorigin.com",
  "http://localhost:3001",
  "http://localhost:1234",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },

    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],

    credentials: true,
  })
);

// pour toutes les cors
// app.use(cors())

app.use(cookieParser());
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// Define routes
//  app.use('/' , require('./routes/pages'))
app.use("/auth", require("./routes/auth"));
app.use('/USER' , require('./routes/_user'))
app.use('/ORDER' , require('./routes/order'))
app.use('/api' , require('./routes/api'))
app.use('/Email' , require('./routes/Email'))

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    succes: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
