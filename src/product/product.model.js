const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScema = new Schema({
  productName: { type: String, required: true },
  qtyPerUnit: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  unitInStock: { type: Number, required: true },
  discontinued: Boolean,
  categoryId: { type: Schema.Types.ObjectId, ref: "categories" },
});

module.exports = mongoose.model("products", productScema);
