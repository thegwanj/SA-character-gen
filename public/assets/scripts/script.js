let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

// Using faction.value, set a factionName
let factionName = "";

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
const getSheet = () => {
    //let sheet = JSON.parse(localStorage.getItem("characterSheet"));
    characterName.innerHTML = localStorage.getItem("character");
    playerName.innerHTML = localStorage.getItem("player");
    faction.innerHTML = localStorage.getItem("faction");
    subfaction.innerHTML = localStorage.getItem("subfaction");
    patron.innerHTML = localStorage.getItem("patron");
    note.innerHTML = localStorage.getItem("note");

    //renderSheet(sheet);
}
    // fetch('/api/sheet', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });


const renderSheet = (sheet) => {
    console.log("Logging sheet", sheet);

    characterName.innerHTML = sheet.character;
    playerName.innerHTML = sheet.player;
    faction.innerHTML = sheet.faction;
    subfaction.innerHTML = sheet.subfaction;
    patron.innerHTML = sheet.patron;
    note.innerHTML = sheet.note;
}

// Function that handles going to viewSheet page
const viewSheet = () =>
    window.location.href = "/viewSheet";

// Function that handles the saving to db
const saveSheet = (sheet) =>
    fetch('/api/sheet', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheet),
    });

// Function that creates a sheet and sends it off to get saved in the db
const createSheet = (e) => {
    e.preventDefault();
    // const newSheet = {
    //     player: playerName.value,
    //     character: characterName.value,
    //     faction: faction.value,
    //     subfaction: subfaction.value,
    //     patron: patron.value,
    //     note: note.value
    // };

    // console.log(newSheet);

    // let newContent = JSON.stringify(newSheet);

    // // TODO: Instead of making a file, save to localstorage
    // localStorage.setItem("characterSheet", JSON.stringify(newContent));

    localStorage.setItem("player", playerName.value);
    localStorage.setItem("character", characterName.value);
    localStorage.setItem("faction", factionName);
    localStorage.setItem("subfaction", subfaction.value);
    localStorage.setItem("patron", patron.value);
    localStorage.setItem("note", note.value);

    //saveSheet(newSheet).then(viewSheet);
    viewSheet();
}

const checkFaction = () => {
    switch(faction.value){
        case "1":
            factionName = "Human";
            break;
        case "2":
            factionName = "Shifter";
            break;
        case "3":
            factionName = "Vampire";
            break;
        case "4":
            factionName = "Wraith";
            break;
    }
    
    console.log("Ping!");
}

// Adding event listeners
if(window.location.pathname === '/createSheet'){
    submitBtn.addEventListener('click', createSheet);
    faction.addEventListener('change', checkFaction);
}

// Function that gets sheet from db and renders it to the page
const getAndRenderSheet = () => getSheet();

if(window.location.pathname === '/viewSheet'){
    getAndRenderSheet();
}