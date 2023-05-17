const path = require("path");

const debug = require("debug")("weblog-project");
const fileUpload = require("express-fileupload");
const express = require("express");
const mongoose = require("mongoose");
const expressLayout = require("express-ejs-layouts");
const passport = require("passport");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const connectDB = require("./config/db");
const winston = require("./config/winston");
const { setHeaders } = require("./middlewares/headers");

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();
debug("Connected To Database");

//* Passport Configuration
require("./config/passport");

const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
    debug("Morgan Enabled");
    app.use(morgan("combined", { stream: winston.stream }));
}

//* View Engine
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/mainLayout");
app.set("views", "views");

//* BodyPaser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(setHeaders);
//* File Upload Middleware
app.use(fileUpload());

//* Session
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        unset: "destroy",
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

//* Passport
app.use(passport.initialize());
app.use(passport.session());

//* Flash
app.use(flash()); //req.flash

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes
app.use("/", require("./routes/users"));
app.use("/admin", require("./routes/users"));
app.use("/users", require("./routes/users"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/posts", require("./routes/dashboard"));
app.use("/customers", require("./routes/customers"));
app.use("/customersfile", require("./routes/customersfile"));
//* 404 Page
app.use(require("./controllers/errorController").get404);

/*const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: YOUR_API_KEY,
    apiSecret: YOUR_API_SECRET
});
app.post('/send', (req, res) => {
    // Send SMS
    nexmo.message.sendSms(
        config.number, req.body.toNumber, req.body.message, { type: 'unicode' },
        (err, responseData) => { if (responseData) { console.log(responseData) } }
    );
});*/
const TrezSmsClient = require("trez-sms-client");
const client = new TrezSmsClient("fereshteh1382", "123456");
app.post('/send', (req, res) => {
    client.sendMessage(sender, numbers, message, groupId)
        .then((receipt) => {
            console.log("Receipt: " + receipt);
        })
        .catch((error) => {
            // If there is an error, we'll catch that
            console.log(error.isHttpException, error.code, error.message);
        });
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
