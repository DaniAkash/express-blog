const Sequelize = require("sequelize");
const BlogDB = require("../config/BlogDB");

const Author = BlogDB.define("author", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING
});

const AuthorSync = ({ force = false } = { force: false }) => {
  return new Promise((resolve, reject) => {
    Author.sync({ force })
      .then(() => {
        const testAuthor = Author.build({
          firstName: 'dani', 
          lastName: 'akash', 
          email: 'dani@test.com'
        });
        testAuthor.save().then(result => {
          console.log(result.get());
          resolve(result.get());
        });
      })
      .catch(reject);
  });
};

exports.Author = Author;
exports.AuthorSync = AuthorSync;
