const express = require("express");

const app = express();

//include express layouts
const expressLayouts = require('express-ejs-layouts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
app.use(require("cors")());

//set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//set assets path
app.use(express.static('./assets'));

//use express layouts
app.use(expressLayouts);

//extract styles and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//Bring in the routes
app.use("/user", require("./routes/user"));
app.use("/contact", require("./routes/contact"));


//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
