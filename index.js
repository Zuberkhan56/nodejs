const connectDB = require("./app/config/db");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

// connect Db
connectDB();

// Routes
require("./app/routes/user.route")(app);

app.listen(5656, () => {
  console.log(`Server Started at ${5656}`);
});
