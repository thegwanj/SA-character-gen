// TODO: Take variables from createSheet.js and use them here in a similar fashion. We'll need to use the GET route to pull down the data from db.json and use it to put in values to the fields
let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

// Variable for buttons
let homeBtn;
let backBtn;

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

    homeBtn = document.getElementById('homeBtn');
}

// Function that gets info from db
const getSheet = () => 
    fetch('/api/sheet', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

const renderSheet = async (sheet) => {
    console.log("Logging sheet", sheet);

    let jsonSheet = await sheet.json();
    console.log("Logging jsonSheet", jsonSheet);

    console.log(jsonSheet.character);

    characterName.innerHTML = jsonSheet.character;
    playerName.innerHTML = jsonSheet.player;
    faction.innerHTML = jsonSheet.faction;
    subfaction.innerHTML = jsonSheet.subfaction;
    patron.innerHTML = jsonSheet.patron;
    note.innerHTML = jsonSheet.note;
}

// Function that gets sheet from db and renders it to the page
const getAndRenderSheet = () => getSheet().then(renderSheet);

getAndRenderSheet();