const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");
const indexRouter = require("./routers/indexRoute");

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts/"),
  partialsDir: path.join(__dirname, "./views/partials/")
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());

app.use("/", indexRouter);

const server = app.listen(process.env.PORT, () => {
  console.log("Server running in port", +server.address().port);
});
