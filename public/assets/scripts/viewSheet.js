let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;
let breed;
let auspice;
let tribe;
let shadow;
let legion;
let guild;

// Variable for buttons
let homeBtn;

// Variables for faction specific viewing tables
let shifterSubfaction;
let subfactionBasic;

// Variables for future versions
let xpCost;
let freebies;

// Assign variables to form elements if we are at the viewSheet page
if(window.location.pathname === '/viewSheet'){
    playerName = document.getElementById('playerName');
    characterName = document.getElementById('characterName');
    faction = document.getElementById('faction');
    subfaction = document.getElementById('subfaction');
    patron = document.getElementById('patron');
    note = document.getElementById('notes');

    shifterSubfaction = document.getElementById('shifterSubfaction');
    subfactionBasic = document.getElementById('subfactionBasic');
    breed = document.getElementById('breed');
    auspice = document.getElementById('auspice');
    tribe = document.getElementById('tribe');

    wraithSubfaction = document.getElementById('wraithSubfaction');
    shadow = document.getElementById('shadow');
    legion = document.getElementById('legion');
    guild = document.getElementById('guild');

    homeBtn = document.getElementById('homeBtn');
}

// Function that gets info from db
const getSheet = () => {
    //let sheet = JSON.parse(localStorage.getItem("characterSheet"));

    // Sheet object that will get passed into the renderSheet function
    let sheet = {};

    switch (localStorage.getItem("faction")){
        case "Human":
            sheet = {
                player: localStorage.getItem("player"),
                character: localStorage.getItem("character"),
                faction: localStorage.getItem("faction"),
                subfaction: localStorage.getItem("subfaction"),
                patron: localStorage.getItem("patron"),
                note: localStorage.getItem("note")
            }    
            break;
        case "Vampire":
            sheet = {
                player: localStorage.getItem("player"),
                character: localStorage.getItem("character"),
                faction: localStorage.getItem("faction"),
                subfaction: localStorage.getItem("subfaction"),
                patron: localStorage.getItem("patron"),
                note: localStorage.getItem("note")
            }    
            break;
        case "Shifter":
            sheet = {
                player: localStorage.getItem("player"),
                character: localStorage.getItem("character"),
                faction: localStorage.getItem("faction"),
                breed: localStorage.getItem("breed"),
                auspice: localStorage.getItem("auspice"),
                tribe: localStorage.getItem("tribe"),
                patron: localStorage.getItem("patron"),
                note: localStorage.getItem("note")
            }    
            break;
        case "Wraith":
            sheet = {
                player: localStorage.getItem("player"),
                character: localStorage.getItem("character"),
                faction: localStorage.getItem("faction"),
                shadow: localStorage.getItem("shadow"),
                legion: localStorage.getItem("legion"),
                guild: localStorage.getItem("guild"),
                patron: localStorage.getItem("patron"),
                note: localStorage.getItem("note")
            }    
            break;
    }
    renderSheet(sheet);
}
    // fetch('/api/sheet', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });


const renderSheet = (sheet) => {
    console.log("Logging sheet", sheet);

    switch (sheet.faction){
        case "Human":
            characterName.innerHTML = sheet.character;
            playerName.innerHTML = sheet.player;
            faction.innerHTML = sheet.faction;
            subfaction.innerHTML = sheet.subfaction;
            patron.innerHTML = sheet.patron;
            note.innerHTML = sheet.note;    
            break;
        case "Vampire":
            characterName.innerHTML = sheet.character;
            playerName.innerHTML = sheet.player;
            faction.innerHTML = sheet.faction;
            subfaction.innerHTML = sheet.subfaction;
            patron.innerHTML = sheet.patron;
            note.innerHTML = sheet.note;    
            break;
        case "Shifter":
            shifterSubfaction.hidden = false;
            subfactionBasic.hidden = true;
    
            characterName.innerHTML = sheet.character;
            playerName.innerHTML = sheet.player;
            faction.innerHTML = sheet.faction;
            breed.innerHTML = sheet.breed;
            auspice.innerHTML = sheet.auspice;
            tribe.innerHTML = sheet.tribe;
            patron.innerHTML = sheet.patron;
            note.innerHTML = sheet.note;
            break;
        case "Wraith":
            wraithSubfaction.hidden = false;
            subfactionBasic.hidden = true;
    
            characterName.innerHTML = sheet.character;
            playerName.innerHTML = sheet.player;
            faction.innerHTML = sheet.faction;
            shadow.innerHTML = sheet.shadow;
            legion.innerHTML = sheet.legion;
            guild.innerHTML = sheet.guild;
            patron.innerHTML = sheet.patron;
            note.innerHTML = sheet.note;
            break;
    }
}

// // Function that gets info from db
// const getSheet = () => 
//     fetch('/api/sheet', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });

// const renderSheet = async (sheet) => {
//     console.log("Logging sheet", sheet);

//     let jsonSheet = await sheet.json();
//     console.log("Logging jsonSheet", jsonSheet);

//     console.log(jsonSheet.character);

//     characterName.innerHTML = jsonSheet.character;
//     playerName.innerHTML = jsonSheet.player;
//     faction.innerHTML = jsonSheet.faction;
//     subfaction.innerHTML = jsonSheet.subfaction;
//     patron.innerHTML = jsonSheet.patron;
//     note.innerHTML = jsonSheet.note;
// }

// Function that gets sheet from db and renders it to the page
const getAndRenderSheet = () => getSheet();

getAndRenderSheet();