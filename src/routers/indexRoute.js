const express = require("express");

const indexRouter = express.Router();

indexRouter.route('/')
  .get((req, res) => {
    res.render("home", {
      layout: "hero",
      title: "Blog Home"
    });
  })
  .post((req, res) => {
    res.send("creating a new user");
  })

module.exports = indexRouter;
