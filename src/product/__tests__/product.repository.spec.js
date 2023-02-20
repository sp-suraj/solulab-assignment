const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const ProductModel = require("../product.model");
const {
  saveProduct,
  updateOneProduct,
  readAllProducts,
  getOneProduct,
  deleteOneProduct,
} = require("../product.repository");

describe("category repository tests", () => {
  beforeAll(async () => {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const mongooseOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose.connect(uri, mongooseOpts);
  });

  afterEach(async () => {
    await ProductModel.remove({});
  });

  describe("#saveProduct", () => {
    it("should save new Product data without category sent by POST method successfully", async () => {
      const testProduct = {
        productName: "Parle Biscuit",
        qtyPerUnit: 10,
        unitPrice: 5,
        unitInStock: 100,
        discontinued: true,
      };

      const savedProduct = await saveProduct(testProduct);
      expect(savedProduct).toMatchObject(testProduct);
    });

    it("should save new Product data with category successfully", async () => {
      const categoryName = "Toys";

      const productDetails = {
        productName: "teddy",
        qtyPerUnit: 10,
        unitPrice: 5,
        unitInStock: 100,
        discontinued: true,
      };

      const categoryId = mongoose.Types.ObjectId();
      const savedProduct = await saveProduct(
        { ...productDetails, categoryName },
        categoryId
      );

      expect(savedProduct).toMatchObject({ ...productDetails, categoryId });
    });
  });

  describe("#updateOneProduct", () => {
    it("should update new Product data sent by PATCH method successfully", async () => {
      const testProduct = {
        productName: "T1",
        qtyPerUnit: 10,
        unitPrice: 5,
        unitInStock: 100,
        discontinued: true,
      };

      const savedProduct = await ProductModel.create(testProduct);
      const newUpdate = {
        productName: "T2",
      };
      var updatedProduct = await updateOneProduct(savedProduct._id, newUpdate);
      expect(updatedProduct).toMatchObject(newUpdate);
    });
  });

  describe("#deleteOneProduct", () => {
    it("should delete a saved product successfully", async () => {
      const testProduct = {
        productName: "P1",
        qtyPerUnit: 1,
        unitPrice: 55,
        unitInStock: 10,
        discontinued: false,
      };
      const newProduct = await ProductModel.create(testProduct);
      await deleteOneProduct(newProduct._id);
      await expect(ProductModel.count()).resolves.toBe(0);
    });
  });

  describe("#getOneProduct", () => {
    it("passed with productId should return a saved product successfully", async () => {
      const testProduct = {
        productName: "P1",
        qtyPerUnit: 1,
        unitPrice: 55,
        unitInStock: 10,
        discontinued: false,
      };
      const savedProduct = await ProductModel.create(testProduct);
      const readProduct = await getOneProduct(savedProduct._id);
      await expect(readProduct).toEqual(readProduct);
    });
  });

  describe("#readAllProducts", () => {
    it("should return all the saved products successfully", async () => {
      const testProduct1 = {
        productName: "P1",
        qtyPerUnit: 1,
        unitPrice: 55,
        unitInStock: 10,
        discontinued: false,
      };
      const testProduct2 = {
        productName: "P2",
        qtyPerUnit: 2,
        unitPrice: 64,
        unitInStock: 100,
        discontinued: false,
      };
      await saveProduct(testProduct1);
      await saveProduct(testProduct2);
      const allProducts = await readAllProducts();
      await expect(allProducts.length).toBe(2);
    });
  });
});
