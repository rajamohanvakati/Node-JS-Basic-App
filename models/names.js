var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Names");
var Schema = mongoose.Schema({
  name: String
});

var Model = mongoose.model("Names", Schema);

module.exports = Model;