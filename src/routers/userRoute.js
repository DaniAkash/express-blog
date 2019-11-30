const express = require("express");

const userRouter = express.Router();

userRouter.route('/')
  .get((req, res) => {
    res.render("home", {
      layout: "hero",
      title: "Blog Home"
    });
  })
  .post((req, res) => {
    res.send("creating a new user");
  })

module.exports = userRouter;
