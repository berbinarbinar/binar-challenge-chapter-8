module.exports = (sequelize, Sequelize) => {
  const Player = sequelize.define("player", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    experience: {
      type: Sequelize.INTEGER
    },
    lvl: {
      type: Sequelize.INTEGER
    }
  });

  return Player;
};
