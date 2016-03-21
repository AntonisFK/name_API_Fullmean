var names = require('./../controllers/names.js');
module.exports = function(app){

  app.get('/names', function(req, res){
    names.index(req, res)
  })

  app.post('/names', function(req, res){
    console.log('hit the routes')
    names.create(req, res)
  });

  app.delete('/names/:id', function(req, res){
    names.destroy(req, res);
  });

}