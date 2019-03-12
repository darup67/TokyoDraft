//Function to update a drafted player for Team One
function teamOneDraft(draftedPlayer) {
    $.ajax({
      method: "PUT",
      url: `/api/tokyo_draft/teamone/${draftedPlayer.Id}`,
      data: draftedPlayer
    }).then(getPlayers);
}

//Function to update a drafted player for Team Two
function teamTwoDraft(draftedPlayer) {
    $.ajax({
      method: "PUT",
      url: `/api/tokyo_draft/teamtwo/${draftedPlayer.Id}`,
      data: draftedPlayer
    }).then(getPlayers);
}


function createPlayer(createdPlayer) {
  
}

//Function to get all players from database
function getPlayers() {
   return $.get("/api/tokyo_draft" , function(data) { return data })
}