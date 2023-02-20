const saveCategory = require("../category/category.service");
const {
  saveProduct,
  readAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
} = require("./product.repository");

const getProduct = async (req, res) => {
  const product = await getOneProduct(req.params.id);
  res.send(product);
};

const getAllProducts = async (req, res) => {
  const products = await readAllProducts();
  res.send(products);
};

const createProduct = async (req, res) => {
  let product, categoryId;
  if (req.body.categoryName) {
    /*
    Check if categoryName passed in req.body exists in database or not.
    If not create a new category in database*/
    categoryId = (await saveCategory(req.body.categoryName))._id;
  }
  product = await saveProduct(req.body, categoryId);

  res.send(product);
};

const updateProduct = async (req, res) => {
  const updatedProduct = await updateOneProduct(req.params.id, req.body);
  res.send(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const deletedProduct = await deleteOneProduct(req.params.id);
  res.send(deletedProduct);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
