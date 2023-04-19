// Variables we'll use for the sheet
let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

let shadow;
let passion;
let rank;
let deedName;
let generation;
let sire;

let power;
let skill;
let merit;
let lore;

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

let legionSelection;
let guildSelection;
let legionLabel;
let guildLabel;

let claimedForm;
let shifterForm;
let vampireForm;
let wraithForm;

let claimedCheck;
let claimedSelection;
let claimedLabel;

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

    shadow = document.getElementById('wraithShadow');
    passion = document.getElementById('wraithPassion');
    rank = document.getElementById('shifterRank');
    deedName = document.getElementById('shifterDeed');
    generation = document.getElementById('vampireGen');
    sire = document.getElementById('vampireSire');

    breedSelection = document.getElementById('shifterBreed');
    auspiceSelection = document.getElementById('shifterAuspice');
    tribeSelection = document.getElementById('shifterTribe');
    breedLabel = document.getElementById('breedLabel');
    auspiceLabel = document.getElementById('auspiceLabel');
    tribeLabel = document.getElementById('tribeLabel');
    subfactionLabel = document.getElementById('subfactionLabel');

    legionSelection = document.getElementById('wraithLegion');
    guildSelection = document.getElementById('wraithGuild');
    legionLabel = document.getElementById('legionLabel');
    guildLabel = document.getElementById('guildLabel');

    claimedForm = document.getElementById('claimedForm');
    shifterForm = document.getElementById('shifterForm');
    vampireForm = document.getElementById('vampireForm');
    wraithForm = document.getElementById('wraithForm');

    claimedCheck = document.getElementById('claimedCheck');
    claimedSelection = document.getElementById('claimedSelection');
    claimedLabel = document.getElementById('claimedLabel');

    power = document.getElementById('powers');
    skill = document.getElementById('skills');
    merit = document.getElementById('merits');
    lore = document.getElementById('lores');

    // Assign variable to button
    submitBtn = document.getElementById('submitBtn');
}

// Function to set localStorage items to default
const setDefault = () => {
    console.log("Setting defaults!");
    faction.value = "Human";
    playerName.value = "";
    characterName.value = "";
    claimedCheck.checked = false;
    claimedCheck.value = false;
    patron.value = "";
    note.value = "";
    power.value = "";
    skill.value = "";
    merit.value = "";
    lore.value = "";
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
                newSheet = {
                    player: playerName.value,
                    character: characterName.value,
                    faction: faction.value,
                    subfaction: subfaction.value,
                    claimed: claimedCheck.value,
                    claimedType: claimedSelection.value,
                    patron: patron.value,
                    note: note.value,  
                    power: power.value,
                    skill: skill.value,
                    merit: merit.value,
                    lore: lore.value 
                }
                localStorage.setItem("player", newSheet.player);
                localStorage.setItem("character", newSheet.character);
                localStorage.setItem("faction", newSheet.faction);
                localStorage.setItem("subfaction", newSheet.subfaction);
                localStorage.setItem("claimed", newSheet.claimed);
                localStorage.setItem("claimedType", newSheet.claimedType);
                localStorage.setItem("patron", newSheet.patron);
                localStorage.setItem("note", newSheet.note); 
                localStorage.setItem("powers", newSheet.power);
                localStorage.setItem("skills", newSheet.skill);
                localStorage.setItem("merits", newSheet.merit);
                localStorage.setItem("lores", newSheet.lore);           
                break;
            case "Vampire":
                newSheet = {
                    player: playerName.value,
                    character: characterName.value,
                    faction: faction.value,
                    subfaction: subfaction.value,
                    generation: generation.value,
                    sire: sire.value,
                    patron: patron.value,
                    note: note.value, 
                    power: power.value,
                    skill: skill.value,
                    merit: merit.value,
                    lore: lore.value   
                }        
                localStorage.setItem("player", newSheet.player);
                localStorage.setItem("character", newSheet.character);
                localStorage.setItem("faction", newSheet.faction);
                localStorage.setItem("subfaction", newSheet.subfaction);
                localStorage.setItem("generation", newSheet.generation);
                localStorage.setItem("sire", newSheet.sire);
                localStorage.setItem("patron", newSheet.patron);
                localStorage.setItem("note", newSheet.note); 
                localStorage.setItem("powers", newSheet.power);
                localStorage.setItem("skills", newSheet.skill);
                localStorage.setItem("merits", newSheet.merit);
                localStorage.setItem("lores", newSheet.lore);           
                break;
            case "Shifter":
                newSheet = {
                    player: playerName.value,
                    character: characterName.value,
                    faction: faction.value,
                    breed: breedSelection.value,
                    auspice: auspiceSelection.value,
                    tribe: tribeSelection.value,
                    rank: rank.value,
                    deedName: deedName.value,
                    patron: patron.value,
                    note: note.value, 
                    power: power.value,
                    skill: skill.value,
                    merit: merit.value,
                    lore: lore.value   
                }        
                localStorage.setItem("player", newSheet.player);
                localStorage.setItem("character", newSheet.character);
                localStorage.setItem("faction", newSheet.faction);
                localStorage.setItem("breed", newSheet.breed);
                localStorage.setItem("auspice", newSheet.auspice);
                localStorage.setItem("tribe", newSheet.tribe);
                localStorage.setItem("rank", newSheet.rank);
                localStorage.setItem("deedName", newSheet.deedName);
                localStorage.setItem("patron", newSheet.patron);
                localStorage.setItem("note", newSheet.note);
                localStorage.setItem("powers", newSheet.power);
                localStorage.setItem("skills", newSheet.skill);
                localStorage.setItem("merits", newSheet.merit);
                localStorage.setItem("lores", newSheet.lore);           
                break;
            case "Wraith":
                newSheet = {
                    player: playerName.value,
                    character: characterName.value,
                    faction: faction.value,
                    legion: legionSelection.value,
                    guild: guildSelection.value,
                    shadow: shadow.value,
                    passion: passion.value,
                    patron: patron.value,
                    note: note.value, 
                    power: power.value,
                    skill: skill.value,
                    merit: merit.value,
                    lore: lore.value   
                }        
                localStorage.setItem("player", newSheet.player);
                localStorage.setItem("character", newSheet.character);
                localStorage.setItem("faction", newSheet.faction);
                localStorage.setItem("legion", newSheet.legion);
                localStorage.setItem("guild", newSheet.guild);
                localStorage.setItem("shadow", newSheet.shadow);
                localStorage.setItem("passion", newSheet.passion);
                localStorage.setItem("patron", newSheet.patron);
                localStorage.setItem("note", newSheet.note);
                localStorage.setItem("powers", newSheet.power);
                localStorage.setItem("skills", newSheet.skill);
                localStorage.setItem("merits", newSheet.merit);
                localStorage.setItem("lores", newSheet.lore);           
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
    viewSheet();
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

    legionSelection.hidden = true;
    guildSelection.hidden = true;
    legionLabel.hidden = true;
    guildLabel.hidden = true;

    claimedForm.hidden = true;
    shifterForm.hidden = true;
    vampireForm.hidden = true;
    wraithForm.hidden = true;

    let newOption;

    switch(faction.value){
        case "Human":
            humanSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });
            claimedForm.hidden = false;
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

            shifterForm.hidden = false;
            break;
        case "Vampire":
            vampireSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });
            vampireForm.hidden = false;
            break;
        case "Wraith":
            legionSelection.hidden = false;
            guildSelection.hidden = false;
            legionLabel.hidden = false;
            guildLabel.hidden = false;

            subfaction.hidden = true;
            subfactionLabel.hidden = true;

            wraithForm.hidden = false;
            break;
    }
}

const updateClaimedForm = () => {
    // IF checked, show selection
    if(claimedCheck.checked) {
        claimedSelection.hidden = false;
        claimedLabel.hidden = false;
    } else {
        claimedSelection.hidden = true;
        claimedLabel.hidden = true; 
    }

    // Otherwise, hide it
}

// Adding event listeners
if(window.location.pathname === '/createSheet'){
    submitBtn.addEventListener('click', createSheet);
    faction.addEventListener('change', updateSubfactionSelection);
    claimedCheck.addEventListener('change', updateClaimedForm);
}

// Set to default options when coming back to this page
setDefault();