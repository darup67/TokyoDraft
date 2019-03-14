
$(document).ready(function() {
  getPlayers(); //Sequelize gets all players.



  //MODAL POPUP GOES HERE

  //MODAL CLOSE EVENT LISTENER GOES HERE
})








//RUNNING CODE ABOVE
//FUNCTION DEFINITIONS BELOW


//Function designed to recursively be called to start our game.
function firstPick() {

}

//Function to iterate picks after the first
function nextPick() {

}

//Function to update a drafted player for Team One UNNECESSARY, DATA DOESNT NEED TO BE UPDATED IN DATABASE DURING GAMEPLAY
function teamOneDraft(draftedPlayer) {
    $.ajax({
      method: "PUT",
      url: `/api/tokyo_draft/teamone/${draftedPlayer.Id}`,
      data: draftedPlayer
    }).then(getPlayers);
}

//Function to update a drafted player for Team Two UNNECESSARY, DATA DOESNT NEED TO BE UPDATED IN DATABASE DURING GAMEPLAY
function teamTwoDraft(draftedPlayer) {
    $.ajax({
      method: "PUT",
      url: `/api/tokyo_draft/teamtwo/${draftedPlayer.Id}`,
      data: draftedPlayer
    }).then(getPlayers);
}


function createPlayer(createdPlayer) {
  //Unnecessary for 1.0
}

//Function to get all players from database
function getPlayers() {
   return $.get("/api/tokyo_draft" , function(data) { return data })
}

//Constructor that takes a single Row array from Sequelize and turns it into a format we want.

function Player(name, teamName, points, drafted, draftedTeam, photoURL) {
  this.name = name;
  this.teamName = teamName,
  this.points = points;
  this.drafted = drafted;
  this.draftedTeam = draftedTeam;
  this.photoURL = photoURL;
}

//Function iterating our getPlayers response and making a variable for each.
function makePlayers(rowData) {
  for (i = 0; i < rowData.length; i++) {
    
  }
};