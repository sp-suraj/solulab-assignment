const CategoryModel = require("./category.model");

const createCategory = async (categoryName) => {
  return CategoryModel.findOneAndUpdate(
    { categoryName },
    {
      $setOnInsert: { categoryName },
    },
    { new: true, upsert: true }
  );
};

module.exports = createCategory;
