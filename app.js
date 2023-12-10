const { Database } = require("./Database/database");
const express = require("express");
const app = express();
const API = require('./Router/router');
const cors = require('cors');
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());

// Home Server API
app.use("/", API);

//Running the PORT
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("Error in the Connection");
  } else {
    console.log(`Server is Running on the ${process.env.PORT}`);
  }
});

Database();
