var db = require("../models");

module.exports = function(app) {

  //WORKING
  app.get("/", function(req, res) {
    console.log(req , "request")
    db.Player.findAll({}).then(function(allPlayers) {
      res.json(allPlayers)
    })
  });
  
  //TODO
  app.post("/api/tokyo_draft", function(req, res) {
    
  });
  
  //TODO
  app.put("/api/tokyo_draft/:id", function(req, res) {
    
  });

}