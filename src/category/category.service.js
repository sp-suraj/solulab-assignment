const createCategory = require("./category.repository");

const saveCategory = async (categoryName) => {
  return createCategory(categoryName);
};

module.exports = saveCategory;
