var express = require("express");
var app = express();
var router = require("../Node-JS-Basic-App/routes/router.js");
app.set("view engine","ejs");
app.set("views","../Node-JS-Basic-App/views/");
app.use("/",router);
app.listen(3000);

