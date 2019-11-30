const express = require("express");
const { User } = require("../models/Users");
const { compareHash } = require("../utils/hash");

const userRouter = express.Router();

userRouter.route('/login')
  .get((req, res) => {
    res.render("user-login", {
      layout: "login"
    });
  })
  .post((req, res) => {
    const { 
      email = "", 
      password = "" 
    } = req.body;
    User.findOne({
      where: {
        email,
      }
    })
    .then(userInstance => {
      if(userInstance) {
        const user = userInstance.get();
        compareHash(password, user.password)
        .then(isSuccess => {
          if(isSuccess) {
            res.send("logged in!");
          } else {
            res.send("Failed");
          }
        })
        .catch(error => {
          res.status(500).send("Internal Server Error");
        });
      } else {
        res.status(404).send("User Not Found!");
      }
    })
    .catch(error => {
      res.status(500).send("Internal Server Error");
    });
  });

module.exports = userRouter;
