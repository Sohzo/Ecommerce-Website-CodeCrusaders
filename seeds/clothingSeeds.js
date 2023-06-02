const { Clothing } = require('../models');

const clothingdata = [
  {
    name: "Men's Black T-Shirt",
    price: '50.00',
    genId: 1
  },
  {
    name: "Men's White T-Shirt",
    price: '50.00',
    genId: 1
  },
  {
    name: "Men's Black Hoodie",
    price: '75.00',
    genId: 1
  },
  {
    name: "Men's White Hoodie",
    price: '75.00',
    genId: 1
  },
  {
    name: "Women's Tan Shirt",
    price: '55.00',
    genId: 2
  },
  {
    name: "Women's White Shirt",
    price: '55.00',
    genId: 2
  },
  {
    name: "Women's Black Hoodie",
    price: '75.00',
    genId: 2
  },
  {
    name: "Women's Gray Hoodie",
    price: '75.00',
    genId: 2
  },
  {
    name: "Women's Gray Sweatpants",
    price: '75.00',
    genId: 2
  },
];

const seedClothing = () => Clothing.bulkCreate(clothingdata);

module.exports = seedClothing;
