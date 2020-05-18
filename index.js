require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//import routes


//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config routes

app.get("/", (req, res) => {
  res.send("backend ready");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
