const { Clothing } = require('../models');

const clothingdata = [
  {
    name: 'Printemps',
    starting_date: 'April 20, 2021 07:00:00',
    ending_date: 'June 21, 2021 17:00:00',
  },
  {
    name: 'T-Shirt',
    price: '60.00',
    image: 'insert image src here!!!!',
  },
  {
    name: 'Sweatpants',
    price: '70.00',
    image: 'insert image src here!!!!',
  },
  {
    name: 'Hoodie',
    price: '80.00',
    image: 'insert image src here!!!!',
  },
];

const seedClothing = () => Clothing.bulkCreate(clothingdata);

module.exports = seedClothing;
