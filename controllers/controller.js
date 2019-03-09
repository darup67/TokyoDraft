var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  tokyo_draft.selectAll(function(result) {
    res.render("index", {result});
  });
});

router.post("/api/tokyo_draft", function(req, res) {
  tokyo_draft.insertOne(req.body._name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/tokyo_draft/:id", function(req, res) {
  tokyo_draft.updateOne(req.body.req.params.id, function(result){
res.json({ id:result });
  });
});


module.exports = router;