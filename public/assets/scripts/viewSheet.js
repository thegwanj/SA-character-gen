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
let passion;
let claimed;
let claimedType;
let claimedTypePair;
let generation;
let sire;
let legion;
let guild;

// Variable for buttons
let homeBtn;

// Variables for faction specific viewing tables
let shifterSubfaction;
let wraithSubfaction;
let humanSubfaction;
let vampireSubfaction;
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
    passion = document.getElementById('passion');
    legion = document.getElementById('legion');
    guild = document.getElementById('guild');

    humanSubfaction = document.getElementById('humanSubfaction');
    claimed = document.getElementById('claimed');
    claimedType = document.getElementById('claimedType');
    claimedTypePair = document.getElementById('claimedTypePair');

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
                claimed: localStorage.getItem("claimed"),
                claimedType: localStorage.getItem("claimedType"),
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
                generation: localStorage.getItem("generation"),
                sire: localStorage.getItem("sire"),
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
                rank: localStorage.getItem("rank"),
                deedName: localStorage.getItem("deedName"),
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
                passion: localStorage.getItem("passion"),
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

    characterName.innerHTML = sheet.character;
    playerName.innerHTML = sheet.player;
    faction.innerHTML = sheet.faction;

    patron.innerHTML = sheet.patron;
    note.innerHTML = sheet.note;    

    switch (sheet.faction){
        case "Human":
            humanSubfaction.hidden = false;

            subfaction.innerHTML = sheet.subfaction;
            claimed.innerHTML = sheet.claimed;

            if(sheet.claimed == true){
                claimedType.innerHTML = sheet.claimedType;
                claimedTypePair.hidden = false;
            }
            break;
        case "Vampire":
            vampireSubfaction.hidden = false;

            subfaction.innerHTML = sheet.subfaction;
            generation.innerHTML = sheet.generation;
            sire.innerHTML = sheet.sire;
            break;
        case "Shifter":
            shifterSubfaction.hidden = false;
            subfactionBasic.hidden = true;
    
            breed.innerHTML = sheet.breed;
            auspice.innerHTML = sheet.auspice;
            tribe.innerHTML = sheet.tribe;
            deedName.innerHTML = sheet.deedName;
            rank.innerHTML = sheet.rank;
            break;
        case "Wraith":
            wraithSubfaction.hidden = false;
            subfactionBasic.hidden = true;
    
            shadow.innerHTML = sheet.shadow;
            passion.innerHTML = sheet.passion;
            legion.innerHTML = sheet.legion;
            guild.innerHTML = sheet.guild;
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