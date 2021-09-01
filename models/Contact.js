const mongoose = require("mongoose");

const contact = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "name is required",
    },
    email: {
      type: String, 
      
    },
    city: {
        type: String,
    },
    phone:{
      type: Number,
    },
    cv:{
      type: String, 
    },
    message: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", contact);
