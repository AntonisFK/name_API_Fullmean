var mongoose = require('mongoose');

var NameSchema = new mongoose.Schema({
  name: String
});

//do not store this line to a variable 
mongoose.model('Name', NameSchema);