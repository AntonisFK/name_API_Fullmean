var mongoose = require('mongoose');
var Name = mongoose.model('Name');

module.exports = (function() {
  return {
    index: function(req, res){
     Name.find({}, function(err, name){
      res.json({name});
    })
    },
    create: function(req, res){
      // this line is the line of code that will be diffrent 
      Name.create(req.body, function(err, name){
        if(err){
          console.log(err);
        }
        else{
          res.json(name);
        }
      });
    }
  }
})(); 