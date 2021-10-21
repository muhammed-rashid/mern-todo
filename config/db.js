const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected Successfully");
    })
    .catch((err) => {
      console.log("something went wrong connecting database", err);
    });
};

module.exports = connectDB;
