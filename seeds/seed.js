const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const seedComments = () => Comment.bulkCreate(commentData);
  seedComments();
  process.exit(0);
};

seedComments();
seedDatabase();

// INSERT INTO user (id, firstName, lastName, email, userName, passwordHash, registeredAt, lastLogin, intro, strengths)
// VALUES 
// ( ? , "Lisa", "Erickson", "erickson.l.lisa@gmail.com", ? , ? , ? , ? , ? , ? ),  
// ( ? , "Matt", "Malone", "matthewmalone3@gmail.com", ? , ? , ? , ? , ? , ? ),  
// ( ? , "Kenny", "Hunter", "huntken26@gmail.com", ? , ? , ? , ? , ? , ? ),  
// ( ? , "Kyle", "Nguyen", "q_nguyen91@yahoo.com", ? , ? , ? , ? , ? , ? )
   

