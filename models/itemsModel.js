const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  sizeCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sizeCategory',
    required: true
  },
  colorCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'colorCategory',
    required: true
  },
  smallDescription: { type: String },
  largeDescription: { type: String },

  image: {
    type: String,
    default: ''
  },

}, { timestamps: true });

const itemsModel = mongoose.model("items", itemsSchema);

module.exports = itemsModel;
