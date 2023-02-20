const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const CategoryModel = require("../category.model");
const createCategory = require("../category.repository");

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
    await CategoryModel.remove({});
  });

  it("should save category details with specified name successfully", async () => {
    const categoryName = "Electronics";

    const savedModel = await createCategory(categoryName);

    expect(savedModel).toMatchObject({ categoryName });
    await expect(CategoryModel.count()).resolves.toBe(1);
  });

  it("should return and save existing category details successfully", async () => {
    const categoryName = "Electronics";

    await CategoryModel.create({ categoryName });

    const savedModel = await createCategory(categoryName);

    expect(savedModel).toMatchObject({ categoryName });
    await expect(CategoryModel.count()).resolves.toBe(1);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
});
