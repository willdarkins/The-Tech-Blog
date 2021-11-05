//Collecting and exporting controller data
const User = require("./User");
const Post = require("./Post");

//Defining model associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };