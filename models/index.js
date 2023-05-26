const User = require('./User');
const Clothing = require('./Clothing');
const Pieces = require('./Pieces');

Clothing.hasMany(Pieces, {
  foreignKey: 'clothing_id',
});

Pieces.belongsTo(Clothing, {
  foreignKey: 'pieces_id',
});

module.exports = { User, Clothing, Pieces };
