let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

// Variables for faction/subfaction names
let factionName = "";
let subfactionName = "";

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
     const newSheet = {
         player: playerName.value,
         character: characterName.value,
         faction: factionName,
         subfaction: subfactionName,
         patron: patron.value,
         note: note.value
    };

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
    
    updateSubfaction();
}

const updateSubfaction = () => {
    // Remove all options
    subfaction.innerHTML="";
    let newOption;

    switch(faction.value){
        // Human
        case "1":
            humanSubfaction.forEach((el, i) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = i+1;

                subfaction.add(newOption);
            });
            break;
        // Shifter
        case "2":
            shifterSubfaction.forEach((el, i) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = i+1;

                subfaction.add(newOption);
            });
            break;
        // Vampire
        case "3":
            vampireSubfaction.forEach((el, i) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = i+1;

                subfaction.add(newOption);
            });
            break;
        // Wraith
        case "4":
            wraithSubfaction.forEach((el, i) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = i+1;

                subfaction.add(newOption);
            });
            break;
    }
}

const checkSubfaction = () => {
    // IF subfaction.value is a certain value

    // THEN assign subfactionName the text value

    // ELSE if wraith, always assign "N/A" for now
}

// Adding event listeners
if(window.location.pathname === '/createSheet'){
    submitBtn.addEventListener('click', createSheet);
    faction.addEventListener('change', checkFaction);
    subfaction.addEventListener('change', checkSubfaction);
}

// Function that gets sheet from db and renders it to the page
const getAndRenderSheet = () => getSheet();

if(window.location.pathname === '/viewSheet'){
    getAndRenderSheet();
}