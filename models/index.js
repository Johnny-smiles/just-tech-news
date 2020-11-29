const User = require("./User");
const Post = require("./Post");

// create associations. linking One user to many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// creating associations. Linking many post to one user.
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Post };