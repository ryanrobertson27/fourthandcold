const mongoose = require('mongoose');

const { Schema } = mongoose;

const squareSchema = new Schema({
  position: Number,
  wins: Number,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Square = mongoose.model('Square', squareSchema);
module.exports = Square;
