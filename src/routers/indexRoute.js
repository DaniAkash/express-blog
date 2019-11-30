const express = require("express");
const { Post } = require("../models/Posts");

const indexRouter = express.Router();

indexRouter.route('/')
  .get((req, res) => {
    Post.findAll()
      .then(postsInstance => {
        const posts = postsInstance.map(post => post.get());
        res.render("home", {
          layout: "hero",
          title: "Blog Home",
          posts
        });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send("Internal Server Error")
      });
  })

module.exports = indexRouter;
