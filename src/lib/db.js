const mongoose = require("mongoose");

//Database Connection URL
const url = "mongodb://127.0.0.1:27017/inventory";
mongoose.set("strictQuery", true);

//Start Connection
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB Database");
  })
  .catch((err) => {
    console.log(err);
  });
