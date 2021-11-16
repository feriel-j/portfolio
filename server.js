const express = require("express");
const app = express();
//importing database
const connectDB = require("./config/connectDB");
//importing dotenv
require("dotenv").config();
//connection database
connectDB();
//cors
const cors = require("cors");
//NODEMAILER
const nodemailer = require("nodemailer");

//midellware
app.use(express.json());
app.use(cors());

//routes
app.use("/portfolio", require("./routes/projectRouter"));
app.use("/contact", require("./routes/contact"));
//running browser
app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server jawa behi ...");
});
