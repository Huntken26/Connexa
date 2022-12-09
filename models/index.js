
const User = require("./User");
const Post = require("./posts");
const Comment = require("./comment");

User.hasMany(Post, {
    foreignKey: "userID",
});
Post.belongsTo(User, {
    foreignKey: "userID",
});
Comment.belongsTo(User, {
    foreignKey: "userID",
});
Comment.belongsTo(Post, {
    foreignKey: "userID",
});
User.hasMany(Comment, {
    foreignKey: "userID",
});
Post.hasMany(Comment,{
    foreignKey: "userID",
});

module.exports = { User, Post, Comment };

