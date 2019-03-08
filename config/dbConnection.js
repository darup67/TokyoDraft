// Dependencies
var Sequelize = require("sequelize");

//REMEMBER TO PUT YOUR MYSQL PASSWORD IN THE 3RD PARAMETER
var connection = new Sequelize("tokyo_draft", "root", "testpass", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = connection;
