const sequelize = require('../config/connection');
const seedClothing = require('./clothingSeeds');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedClothing();

  await seedPaintings();

  process.exit(0);
};

seedAll();
