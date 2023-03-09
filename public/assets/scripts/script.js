let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

// Variable for buttons
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

// Assign variables to form elements if we are at the viewSheet page
if(window.location.pathname === '/viewSheet'){
    playerName = document.getElementById('playerName');
    characterName = document.getElementById('characterName');
    faction = document.getElementById('faction');
    subfaction = document.getElementById('subfaction');
    patron = document.getElementById('patron');
    note = document.getElementById('notes');
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

    characterName.innerHTML = jsonSheet.character;
    playerName.innerHTML = jsonSheet.player;
    faction.innerHTML = jsonSheet.faction;
    subfaction.innerHTML = jsonSheet.subfaction;
    patron.innerHTML = jsonSheet.patron;
    note.innerHTML = jsonSheet.note;
}

// Function that handles going to viewSheet page
const viewSheet = () =>
    window.location.href = "/viewSheet";

// TODO: Instead of JSON saving, try using localstorage and see if it makes a difference
// Function that handles the saving to db
const saveSheet = (sheet) =>
    fetch('/api/sheet', {
        method: 'POST',
        cache: "force-cache",
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheet),
    });

// Function that creates a sheet and sends it off to get saved in the db
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
    saveSheet(newSheet).then(viewSheet);
}

// Adding event listeners
if(window.location.pathname === '/createSheet'){
    submitBtn.addEventListener('click', createSheet);
}

// Function that gets sheet from db and renders it to the page
const getAndRenderSheet = () => getSheet().then(renderSheet);

if(window.location.pathname === '/viewSheet'){
    getAndRenderSheet();
}