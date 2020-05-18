require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60, // one hour in milliseconds
    secure: process.env.SECURE_COOKIE || false, // send the cookie only over https, true in production
    httpOnly: true, // true means client JS cannot access the cookie
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
  name: "node-auth1",
  secret: process.env.COOKIE_SECRET,
};

// create a session and send a cookie back (the cookie will store the session id)
app.use(session(sessionConfig)); // turn on sessions for the API

//import routes
const authRoutes = require("./api/routes/authRoutes");
// const userRoutes = require("./api/routes/userRoutes");

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("backend ready");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
