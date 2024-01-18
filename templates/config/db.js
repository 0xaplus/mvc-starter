const mongoose = require("mongoose");
require("dotenv").config();

const connectionURI = process.env.MONGODB_URI;

function connectToMongoDB() {
  mongoose.connect(connectionURI);

  mongoose.connection.on("connected", () => {
    console.log("Successfully connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err, "An error occurred!");
  });
}

module.exports = { connectToMongoDB };