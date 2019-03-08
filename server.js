var express = require("express")

// TODO
// var controller = require("./controllers/controller.js")


var PORT = process.env.PORT || 8080

console.log("SERVERJS TEST")

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// TODO
// controller(app)

//MAIN SCREEN TURN ON

app.listen(PORT , function() {
    console.log(`APP NOW LISTENING ON ${PORT}`)
});