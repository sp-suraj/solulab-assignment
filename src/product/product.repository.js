const ProductModel = require("./product.model");

const saveProduct = async (body, categoryId) => {
  const product = new ProductModel({
    productName: body.productName,
    qtyPerUnit: body.qtyPerUnit,
    unitPrice: body.unitPrice,
    unitInStock: body.unitInStock,
    discontinued: body.discontinued,
    categoryId: categoryId ?? undefined,
  });
  return product.save();
};

const readAllProducts = async () => {
  return ProductModel.find({}).populate("categoryId");
};

const getOneProduct = async (id) => {
  return ProductModel.find({ _id: id }).populate("categoryId");
};

const updateOneProduct = async (id, body) => {
  return ProductModel.findByIdAndUpdate(id, { $set: body }, { new: true });
};

const deleteOneProduct = async (id) => {
  return ProductModel.findByIdAndDelete(id);
};

module.exports = {
  saveProduct,
  readAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
