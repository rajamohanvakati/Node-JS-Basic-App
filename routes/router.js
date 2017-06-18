var express = require("express");
var Names = require("../models/names.js");
var router = express.Router();

router.get("/", function(req, res){
  Names.find({}, function(err, names){
    if(err) throw err;
    if(names.length > 1){
      res.render("index", {data: names})
    } else{
      res.render("index", {data: "No names added yet!"})
    }
  });
});

router.get("/:name", function(req, res){
  var newName = new Names({ name: req.params.name });
  newName.save(function(err){
    if(err) throw err;
    res.redirect("/");
  });
});

module.exports = router;