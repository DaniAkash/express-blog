const express = require("express");

const apiRouter = express.Router();

apiRouter.route('/')
  .get((req, res) => {
    res.render("home", {
      layout: "hero",
      title: "Blog Home"
    });
  })
  .post((req, res) => {
    res.send("creating a new user");
  })

module.exports = apiRouter;
