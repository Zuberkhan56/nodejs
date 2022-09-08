const connectDB = require("./app/config/db");
const express = require("express");
require("dotenv").config();
let app = express();
app.use(express.json());
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middlerware18 = require("i18next-http-middleware");
const i18n = require("i18n");
var cookieParser = require("cookie-parser");

// connect Db
// connectDB();

//i18next
app.use(cookieParser());
i18next
.use(Backend)
.use(middlerware18.LanguageDetector)
.init({
fallbackLng: ["es", "fr", "en-US", "dev"],
backend: {
loadPath: "./locales/{{lng}}/translation.json",
},
});

app.use(middlerware18.handle(i18next,{
ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /_ return true to ignore _/ }
removeLngFromUrl: false
}));
app.use(express.json());
// Routes
require("./app/routes/user.route")(app);
app.get("/user", (req, res) => {
res.send({ message: req.t("user_create_success") });
console.log("Hiiiiiiii");
});
app.listen(5656, () => {
console.log(`Server Started at ${5656}`);
});
