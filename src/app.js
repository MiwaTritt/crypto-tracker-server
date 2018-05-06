import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import flash from "connect-flash";
import session from "express-session";

import initializeDb from "./lib/db";
import middleware from "./middleware";
import api from "./api";
import config from "./config/config.json";

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan("dev"));

// 3rd party middleware
app.use(cors({ exposedHeaders: config.corsHeaders }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false, limit: config.bodyLimit }));

// parse json
app.use(bodyParser.json({ limit: config.bodyLimit }));

// read cookies
app.use(cookieParser());

// passport setup
app.use(
  session({
    secret: config.session.secret,
    cookie: config.cookie.secure,
    resave: config.session.resave, // TODO may need to change based on future session store
    saveUninitialized: config.session.saveUninitialized
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// connect to db
initializeDb(db => {
  // internal middleware
  app.use(middleware({ config, db }));

  // v1 api router
  app.use("/v1", api({ config, db }));

  app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
});

export default app;
