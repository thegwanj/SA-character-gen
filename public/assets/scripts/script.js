let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

let submitBtn;

// Variables for future versions
let xpCost;
let freebies;

// Assign variables to form elements if we are at the form
if(window.location.pathname === '/createSheet'){
    playerName = document.getElementById('playerName');
    characterName = document.getElementById('characterName');
    faction = document.getElementById('faction');
    subfaction = document.getElementById('subfaction');
    patron = document.getElementById('patron');
    note = document.getElementById('notes');

    // Assign variable to button
    submitBtn = document.getElementById('submitBtn');
}

// Function that handles the saving to db
const saveSheet = (sheet) =>
    fetch('/api/sheet', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheet),
    });

// Create a function that takes in the form information and saves it to db. Then, change page to the viewSheet.html
const createSheet = (e) => {
    e.preventDefault();
    const newSheet = {
        player: playerName.value,
        character: characterName.value,
        faction: faction.value,
        subfaction: subfaction.value,
        patron: patron.value,
        note: note.value
    };
    saveSheet(newSheet);
}

// Adding event listeners
if(window.location.pathname === '/createSheet'){
    submitBtn.addEventListener('click', createSheet);
}