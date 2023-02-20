const express = require("express");
const app = express();
const bodyPraser = require("body-parser");
const database = require("./src/lib/db");
const router = require("./src/routes/route");

// Server Port
const port = process.env.PORT || 4000;

//Middlewares
app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({ extended: true }));
app.use(router);

//Server Listen
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
