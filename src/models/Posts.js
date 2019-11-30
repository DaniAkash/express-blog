const Sequelize = require("sequelize");
const BlogDB = require("../config/BlogDB");
const { Author } = require("./Authors");

const Post = BlogDB.define("post", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  visible: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  authorId: {
    type: Sequelize.INTEGER,
    references: {
      model: Author,
      key: "id"
    }
  }
});

const PostSync = ({ force = false, author = {} } = { force: false }) => {
  Post.sync({force})
    .then(() => {
      const postData = {
        title: "My sample Post",
        content: "sample post data",
        authorId: author.id,
      };

      Post.create(postData)
        .then(result => {
          console.log(result.get());
        })
        .catch(console.error);
    })
    .catch(console.error);
};

exports.Post = Post;
exports.PostSync = PostSync;