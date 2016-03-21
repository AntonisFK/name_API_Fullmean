var names = require('./../controllers/names.js');
module.exports = function(app){

  app.get('/namesb', function(req, res){
    names.index(req, res)
  })

  app.post('/names', function(req, res){
    console.log('hit the routes')
    names.create(req, res)
  });

  app.delete('/remove/:name', function(req, res){
    names.destroy(req, res);
  });

  app.get('/:name', function(req, res){
    names.show(req, res)
  });

}