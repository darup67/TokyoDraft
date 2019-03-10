var db = require("../models");

module.exports = function(app) {

  //TODO GET ROUTE FOR INDEX.HTML
  app.get("/", function(req, res) {
    res.sendFile()
  })

  //GET ALL PLAYERS ROUTE WORKING
  app.get("/api/tokyo_draft", function(req, res) {
    db.Player.findAll({}).then(function(allPlayers) {
      res.json(allPlayers)
    })
  });
  
  //CREATE PLAYER ROUTE UNTESTED
  app.post("/api/tokyo_draft", function(req, res) {
    db.Player.create({
      name: req.body.name,
      teamName: req.body.teamName,
      points: req.body.points,
      drafted: false,
      draftedTeam: 0
    }).then(function(created) {
      res.json(created)
    });
  });
  
  //TEAM ONE UPDATE WHEN DRAFTED UNTESTED
  app.put("/api/tokyo_draft/teamone/:id", function(req, res) {
    db.Player.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(player) {
      return player.update({
        drafted: true,
        draftedTeam: 1
      })
    }).then(function(updated) {
      res.json(updated)
    });
  });

  //TEAM TWO UPDATE WHEN DRAFTED UNTESTED
  app.put("/api/tokyo_draft/teamtwo/:id", function(req, res) {
    db.Player.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(player) {
      return player.update({
        drafted: true,
        draftedTeam: 2
      })
    }).then(function(updated) {
      res.json(updated)
    });
  });

  //UPDATE ROUTE FOR BANNED PLAYER UNTESTED
  app.put("/api/tokyo_draft/ban/:id" , function(req , res) {
    db.Player.findOne({
      where : {
        id: req.params.id
      }
    }).then(function(player) {
      return player.update({
        drafted: true, 
        draftedTeam: 4
      })
    }).then(function(banned) {
      res.json(banned)
    });
  });
}