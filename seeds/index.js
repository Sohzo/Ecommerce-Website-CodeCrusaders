const sequelize = require('../config/connection');
const seedClothing = require('./clothingSeeds');
const seedPieces = require('./piecesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedClothing();

  await seedPieces();

  process.exit(0);
};

seedAll();
