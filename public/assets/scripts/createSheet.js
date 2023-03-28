let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

// Variable for buttons
let submitBtn;

// Variables for faction specific dropdowns
let breedSelection;
let auspiceSelection;
let tribeSelection;
let breedLabel;
let auspiceLabel;
let tribeLabel;
let subfactionLabel;

let shadowSelection;
let legionSelection;
let guildSelection;
let shadowLabel;
let legionLabel;
let guildLabel;

// Variables for faction specific viewing tables
let shifterSubfaction;
let subfactionBasic;

// Variables for future versions
let xpCost;
let freebies;

// Array variables for subfaction
let humanSubfaction = ["Commoner", "Ghoul", "Gifted Kinfolk", "Kinfolk", "Sorcerer"];
let vampireSubfaction = ["Assamite", "Baali", "Brujah", "Caitiff", "Cappadocian", "Gangrel", "Giovanni", "Lamia", "Lasombra", "Malkavian", "Nosferatu", "Ravnos", "Salubri", "Toreador", "Tremere", "Tzimisce", "Ventrue"];

// Assign variables to form elements if we are at the form
if(window.location.pathname === '/createSheet'){
    playerName = document.getElementById('playerName');
    characterName = document.getElementById('characterName');
    faction = document.getElementById('faction');
    subfaction = document.getElementById('subfaction');
    patron = document.getElementById('patron');
    note = document.getElementById('notes');

    breedSelection = document.getElementById('shifterBreed');
    auspiceSelection = document.getElementById('shifterAuspice');
    tribeSelection = document.getElementById('shifterTribe');
    breedLabel = document.getElementById('breedLabel');
    auspiceLabel = document.getElementById('auspiceLabel');
    tribeLabel = document.getElementById('tribeLabel');
    subfactionLabel = document.getElementById('subfactionLabel');

    shadowSelection = document.getElementById('wraithShadow');
    legionSelection = document.getElementById('wraithLegion');
    guildSelection = document.getElementById('wraithGuild');
    shadowLabel = document.getElementById('shadowLabel');
    legionLabel = document.getElementById('legionLabel');
    guildLabel = document.getElementById('guildLabel');

    // Assign variable to button
    submitBtn = document.getElementById('submitBtn');
}

// Function to set localStorage items to default
const setDefault = () => {
    console.log("Setting defaults!");
    faction.value = "Human";
    playerName.value = "";
    characterName.value = "";
    patron.value = "";
    note.value = "";
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
    var newSheet = {};
    console.log("Creating Sheet");

    // Check to make sure all required fields are filled
    if(playerName.value && characterName.value){
        // Check faction and make a sheet accordingly
        switch(faction.value){
            case "Human":
            case "Vampire":
                newSheet = {
                    player: playerName.value,
                    character: characterName.value,
                    faction: faction.value,
                    subfaction: subfaction.value,
                    patron: patron.value,
                    note: note.value,   
                }        
                localStorage.setItem("player", newSheet.player);
                localStorage.setItem("character", newSheet.character);
                localStorage.setItem("faction", newSheet.faction);
                localStorage.setItem("subfaction", newSheet.subfaction);
                localStorage.setItem("patron", newSheet.patron);
                localStorage.setItem("note", newSheet.note);            
                break;
            case "Shifter":
                newSheet = {
                    player: playerName.value,
                    character: characterName.value,
                    faction: faction.value,
                    breed: breedSelection.value,
                    auspice: auspiceSelection.value,
                    tribe: tribeSelection.value,
                    patron: patron.value,
                    note: note.value,   
                }        
                localStorage.setItem("player", newSheet.player);
                localStorage.setItem("character", newSheet.character);
                localStorage.setItem("faction", newSheet.faction);
                localStorage.setItem("breed", newSheet.breed);
                localStorage.setItem("auspice", newSheet.auspice);
                localStorage.setItem("tribe", newSheet.tribe);
                localStorage.setItem("patron", newSheet.patron);
                localStorage.setItem("note", newSheet.note);            
                break;
            case "Wraith":
                newSheet = {
                    player: playerName.value,
                    character: characterName.value,
                    faction: faction.value,
                    shadow: shadowSelection.value,
                    legion: legionSelection.value,
                    guild: guildSelection.value,
                    patron: patron.value,
                    note: note.value,   
                }        
                localStorage.setItem("player", newSheet.player);
                localStorage.setItem("character", newSheet.character);
                localStorage.setItem("faction", newSheet.faction);
                localStorage.setItem("shadow", newSheet.shadow);
                localStorage.setItem("legion", newSheet.legion);
                localStorage.setItem("guild", newSheet.guild);
                localStorage.setItem("patron", newSheet.patron);
                localStorage.setItem("note", newSheet.note);            
                break;
        }

        console.log(newSheet);
    } else {
        alert("Test");
        return;
    }
    // console.log(newSheet);

    // let newContent = JSON.stringify(newSheet);

    //saveSheet(newSheet).then(viewSheet);
    //viewSheet();
}

const updateSubfactionSelection = () => {
    // Remove all options
    subfaction.innerHTML="";

    // Reveal the subfaction selection and label if it was hidden earlier
    subfaction.hidden = false;
    subfactionLabel.hidden = false;

    // Make all faction specfic subfaction dropdowns and their labels hidden again if not already
    breedSelection.hidden = true;
    auspiceSelection.hidden = true;
    tribeSelection.hidden = true;
    breedLabel.hidden = true;
    auspiceLabel.hidden = true;
    tribeLabel.hidden = true;

    shadowSelection.hidden = true;
    legionSelection.hidden = true;
    guildSelection.hidden = true;
    shadowLabel.hidden = true;
    legionLabel.hidden = true;
    guildLabel.hidden = true;

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
            // Reveal the breed, auspice, and tribe options and hide the subfaction selection
            breedSelection.hidden = false;
            auspiceSelection.hidden = false;
            tribeSelection.hidden = false;
            breedLabel.hidden = false;
            auspiceLabel.hidden = false;
            tribeLabel.hidden = false;
        
            subfaction.hidden = true;
            subfactionLabel.hidden = true;
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
            shadowSelection.hidden = false;
            legionSelection.hidden = false;
            guildSelection.hidden = false;
            shadowLabel.hidden = false;
            legionLabel.hidden = false;
            guildLabel.hidden = false;

            subfaction.hidden = true;
            subfactionLabel.hidden = true;
            break;
    }
}

// Adding event listeners
if(window.location.pathname === '/createSheet'){
    submitBtn.addEventListener('click', createSheet);
    faction.addEventListener('change', updateSubfactionSelection);
}

// Set to default options when coming back to this page
setDefault();