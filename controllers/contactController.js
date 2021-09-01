const mongoose = require("mongoose");
const Contact = mongoose.model("Contact");

exports.createContact = async (req, res) => {
  const { name, email, city, phone, cv, message} = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "contact name can contain only alphabets.";

  const contactExists = await Contact.findOne({ name });

  if (contactExists) throw "form with that name already exists!";

  const contact = new Contact({
    name,
    email,
    city,
    phone,
    cv,
    message
  });

  await contact.save();

  res.json({
    message: "contact created!",
  });
};

exports.getAllContact = async (req, res) => {
  const contact = await Contact.find({});

  res.json(contact);
};


exports.editContact = async (req, res) => {
  const id = req.params._id;
  console.log(id);
  
  
  Contact.findOneAndUpdate({"_id": id}, 
  { "$set": { 
    "name": req.body.name, 
    "email": req.body.email, 
    "city": req.body.city, 
    "phone": req.body.phone } }).exec(function (err, contact) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(contact);
    }})
    //res.json(contact);
  //res.message("contact updated") lets try
  };

 