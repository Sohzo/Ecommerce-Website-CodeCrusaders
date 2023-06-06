const { Clothing } = require('../models');

const clothingdata = [
  {
    name: "Men's Black T-Shirt",
    price: '50.00',
    genId: 1
    imageURL: 'https://images.pexels.com/photos/9558599/pexels-photo-9558599.jpeg',
    
  },
  {
    name: "Men's White T-Shirt",
    price: '50.00',
    genId: 1
    imageURL: 'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Men's Black Hoodie",
    price: '75.00',
    genId: 1
    imageURL: 'https://images.pexels.com/photos/6311679/pexels-photo-6311679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Men's White Hoodie",
    price: '75.00',
    genId: 1
    imageURL: 'https://images.pexels.com/photos/6311135/pexels-photo-6311135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Men's Green Sweats",
    price: '75.00',
    genId: 1
    imageURL: 'https://images.pexels.com/photos/9775733/pexels-photo-9775733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Women's Tan Shirt",
    price: '55.00',
    genId: 2
    imageURL: 'https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Women's White Shirt",
    price: '55.00',
    genId: 2
    imageURL: 'https://images.pexels.com/photos/6311641/pexels-photo-6311641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Women's Black Hoodie",
    price: '75.00',
    genId: 2
    imageURL: 'https://images.pexels.com/photos/6311574/pexels-photo-6311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Women's Gray Hoodie",
    price: '75.00',
    genId: 2
    imageURL: 'https://images.pexels.com/photos/6311613/pexels-photo-6311613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: "Women's Gray Sweatpants",
    price: '75.00',
    genId: 2
    imageURL: 'https://images.pexels.com/photos/6311314/pexels-photo-6311314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const seedClothing = () => Clothing.bulkCreate(clothingdata);

module.exports = seedClothing;
