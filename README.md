# Introduction

**For APIs used in this assignment. To know how it works, Please refer this** **[Postman API Documentation](https://documenter.getpostman.com/view/24246143/2s93CHvFjM)**

##### It contains:-

1. How to setup
2. What is used
3. Folder Structure
4. API Details

## How To Setup

1. Install Dependencies

```
npm install
```

2. Run Server

```
npm start
```

3. To run test

```
npm start test
```

4. To run jest:coverage test

```
npm run test:coverage
```

---

## What are dependencies used

1. For routing- **Express** is Used.

2. For database- **MongoDB** _NoSQL_ Database is used.

- For convenience in the creation and management of data in MongoDB.- **Mongoose** is used

3. For test- **Jest** is used. [More About Jest](https://github.com/facebook/jest)
   * `jest --coverage` **test** is done to check if any code is not skipping.

---

## Folder Structure

* _model file_ contains Model Schema
* _repository file_ manages database actions
* _service file_ takes action from routes, access repository & return response to routes

1. **_Lib_** folder consists [database file](src/lib/db.js)

2. All the **product routes** are in [**_routes folder_**](src/routes/)

3. [**_Category_**](src/category/) folder contains [tests folder](src/category/__tests__), [Category Model file](src/category/category.model.js), [Category Repository file](src/category/category.repository.js) and [Category Service file](src/category//category.service.js)

4. Similarly [**_Product_**](src/product/) folder contains [tests folder](src/product/__tests__), [Product Model file](src/product/product.model.js), [Product Repository file](src/product/product.repository.js) and [Product Service file](src/product/product.service.js)

---

## API Details

**_Check for_** **[Postman API Documentation](https://documenter.getpostman.com/view/24246143/2s93CHvFjM)**

After the server starts you can access apis at `http://localhost:4000/`

The apis available are as below-

1. `/readAll` will return all the records of the product table (if product has any category then category will also be fetched in the response).

2. `/read/[id]` will return a particular product record from the product table(if product has any category then category will also be fetched in the response).Put the `id` of the product here `[id]` which you want to read from the table.

3. `/create` will create a new product and category(if category name is inserted in product data otherwise product will not contain any category).

4. `/update/[id]` will update a particular product record from product table. You have to pass the `id` at `[id]` of that product you want to update.

5. `/delete/[id]` will delete a particular product record from product table. Pass the `id` at `[id]` of which product you want to delete.
