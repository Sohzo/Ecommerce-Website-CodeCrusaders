const sequelize = require('../config/connection');
const seedClothing = require('./clothingSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedClothing();

  process.exit(0);
};

seedAll();
