
var ctrl = require('./../server/controllers/Controller.js');
module.exports = function Routes(app) {

  // EXPRESS initial page request
  app.get('/', function(req,res) {
    ctrl.index(req,res);
  })

  // // get data from mongodb
  // app.get('', function(req,res) {
  //   ctrl.get(req,res);
  // })
  
  // // post data to mongodb
  // app.post('', function(req,res) {
  //   ctrl.post(req,res);
  // })
  
};
