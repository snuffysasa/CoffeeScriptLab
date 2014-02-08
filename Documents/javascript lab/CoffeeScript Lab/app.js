// Generated by CoffeeScript 1.7.1

/*
Module dependencies.
 */

(function() {
  var app, express, form, http, path, routes, user;

  express = require("express");

  routes = require("./routes");

  user = require("./routes/user");

  form = require('./routes/form');

  http = require("http");

  path = require("path");

  app = express();

  app.set("port", process.env.PORT || 3000);

  app.set("views", path.join(__dirname, "views"));

  app.engine("html", require("hogan-express"));

  app.set("view engine", "html");

  app.use(express.favicon());

  app.use(express.logger("dev"));

  app.use(express.json());

  app.use(express.urlencoded());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(express["static"](path.join(__dirname, "public")));

  if ("development" === app.get("env")) {
    app.use(express.errorHandler());
  }

  app.get("/", routes.index);

  app.get("/users", user.list);

  app.get("/form", form.formResponse);

  app.post("/form", form.postResponse);

  http.createServer(app).listen(app.get("port"), function() {
    return console.log("Express server listening on port " + app.get("port"));
  });

}).call(this);

//# sourceMappingURL=app.map
