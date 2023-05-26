const User = require('./User');
const Clothing = require('./Clothing');
const Piece = require('./Pieces');

Clothing.hasMany(Piece, {
  foreignKey: 'clothing_id',
});

Piece.belongsTo(Clothing, {
  foreignKey: 'piece_id',
});

module.exports = { User, Clothing, Piece };
