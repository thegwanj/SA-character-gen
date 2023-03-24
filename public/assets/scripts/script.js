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

// Array variables for subfaction
let humanSubfaction = ["Commoner", "Ghoul", "Gifted Kinfolk", "Kinfolk", "Sorcerer"];
let shifterSubfaction = ["Homid", "Lupus", "Natus", "Ahroun", "Galliard", "Philodox", "Ragabash", "Theurge", "Black Furies", "Black Spiral Dancer", "Bone Gnawer", "Child of Gaia", "Fenrir", "Fianna", "Red Talon", "Shadow Lord", "Silent Strider", "Silver Fang", "Warder of Man", "Bagheera", "Bubasti", "Ceilican", "Swara", "Ananasi", "Corax", "Ratkin"];
let vampireSubfaction = ["Assamite", "Baali", "Brujah", "Caitiff", "Cappadocian", "Gangrel", "Giovanni", "Lamia", "Lasombra", "Malkavian", "Nosferatu", "Ravnos", "Salubri", "Toreador", "Tremere", "Tzimisce", "Ventrue"];
let wraithSubfaction = ["N/A"];

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
    let newSheet = {};

    // Check to make sure all required fields are filled
    if(playerName.value && characterName.value){
        newSheet = {
            player: playerName.value,
            character: characterName.value,
            faction: faction.value,
            subfaction: subfaction.value,
            patron: patron.value,
            note: note.value,   
        }
    } else {
        alert("Test");
        return;
    }
    // console.log(newSheet);

    // let newContent = JSON.stringify(newSheet);

    // // TODO: Instead of making a file, save to localstorage
    // localStorage.setItem("characterSheet", JSON.stringify(newContent));

    localStorage.setItem("player", newSheet.player);
    localStorage.setItem("character", newSheet.character);
    localStorage.setItem("faction", newSheet.faction);
    localStorage.setItem("subfaction", newSheet.subfaction);
    localStorage.setItem("patron", newSheet.patron);
    localStorage.setItem("note", newSheet.note);

    //saveSheet(newSheet).then(viewSheet);
    viewSheet();
}

// Taking out the checkFaction function as it is redundant

const updateSubfaction = () => {
    // Remove all options
    subfaction.innerHTML="";
    let newOption;

    switch(faction.value){
        case "Human":
            humanSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });
            break;
        case "Shifter":
            shifterSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });
            break;
        case "Vampire":
            vampireSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });
            break;
        case "Wraith":
            wraithSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });
            break;
    }
}

// Adding event listeners
if(window.location.pathname === '/createSheet'){
    submitBtn.addEventListener('click', createSheet);
    faction.addEventListener('change', updateSubfaction);
}

// Function that gets sheet from db and renders it to the page
const getAndRenderSheet = () => getSheet();

if(window.location.pathname === '/viewSheet'){
    getAndRenderSheet();
}