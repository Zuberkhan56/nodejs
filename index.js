const connectDB = require("./app/config/db");
const express = require("express");
require("dotenv").config();
let app = express();
app.use(express.json());
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middlerware18 = require("i18next-http-middleware");
var cookieParser = require("cookie-parser");
const path = require("path");
// connect Db
connectDB();

app.use(middlerware18.handle(i18next));
app.use(express.json());
//i18next
app.use(cookieParser());
i18next
  .use(Backend)
  .use(middlerware18.LanguageDetector)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath(lng, ns) {
        return `./assets/locales/${lng}.json`;
      },
    },
  });

// Routes
require("./app/routes/user.route")(app);

app.get("/user", (req, res) => {
  res.send({ message: req.t("user_create_success") });
});

app.listen(5656, () => {
  console.log(`Server Started at ${5656}`);
});
