require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

//Bring in the models
require("./models/User");
require("./models/Contact")


const app = require("./app");

const server = app.listen(8000, () => {
  console.log("Server listening on port 8000");
});


const jwt = require("jwt-then");


const User = mongoose.model("User");
const Contact = mongoose.model("Contact");

