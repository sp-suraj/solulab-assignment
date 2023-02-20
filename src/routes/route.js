const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../product/product.service");

//Read A Product Route
router.get("/read/:id", getProduct);

//ReadAll Products Route
router.get("/readAll", getAllProducts);

//Create Product Route
router.post("/create", createProduct);

//Update Product Route
router.patch("/update/:id", updateProduct);

//Delete Route
router.delete("/delete/:id", deleteProduct);

module.exports = router;
