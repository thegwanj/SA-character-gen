// TODO: Take variables from createSheet.js and use them here in a similar fashion. We'll need to use the GET route to pull down the data from db.json and use it to put in values to the fields
let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

// Variables for future versions
let xpCost;
let freebies;

// Assign variables to form elements if we are at the form
if(window.location.pathname === '/viewSheet'){
    playerName = document.getElementById('playerName');
    characterName = document.getElementById('characterName');
    faction = document.getElementById('faction');
    subfaction = document.getElementById('subfaction');
    patron = document.getElementById('patron');
    note = document.getElementById('notes');
}
