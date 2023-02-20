const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  // TODO change to name
  categoryName: String,
});

module.exports = mongoose.model("categories", categorySchema);
