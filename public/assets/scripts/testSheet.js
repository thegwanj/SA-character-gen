// Arrays containing the subfactions for humans and vampires to use for switching selection options
let humanSubfaction = ["Commoner", "Ghoul", "Gifted Kinfolk", "Kinfolk", "Sorcerer"];
let vampireSubfaction = ["Assamite", "Baali", "Brujah", "Caitiff", "Cappadocian", "Gangrel", "Giovanni", "Lamia", "Lasombra", "Malkavian", "Nosferatu", "Ravnos", "Salubri", "Toreador", "Tremere", "Tzimisce", "Ventrue"];

// Arrays for the selection of skills
const allSkills = ["Academics", "Alchemy", "Archery", "Armory", "Brawl", "Guidance", "Herbalism", "Holy Water", "Locksmithing", "Medicine", "Melee", "Rituals", "Shields"];
let selectedSkills = [];
let remainingSkills = [];

faction = document.getElementById('faction');

// All the various forms
subfactionForm = document.getElementById('subfactionForm');
shifterForm = document.getElementById('shifterForm');
wraithForm = document.getElementById('wraithForm');
claimedForm = document.getElementById('claimedForm');
genRank = document.getElementById('genRank');
generationForm = document.getElementById('generationForm');
rankForm = document.getElementById('rankForm');
passionForm = document.getElementById('passionForm');

// Varaibles for Claimed
claimedCheck = document.getElementById('claimedCheck');
claimedSelection = document.getElementById('claimedSelection');
claimedLabel = document.getElementById('claimedLabel');

// Variables for Energy and Virtue
energy = document.getElementById('energy');
energyType = document.getElementById('energyType');
virtue = document.getElementById('virtue');
virtueType = document.getElementById('virtueType');

// All variables for Sire - Deed Name - Shadow form
sdsLabels = document.getElementById('sdsLabels');
shadowLabel = document.getElementById('shadowLabel');
deedNameLabel = document.getElementById('deedNameLabel');
sireLabel = document.getElementById('sireLabel');
sdsInputs = document.getElementById('sdsInputs');
shadow = document.getElementById('shadow');
deedName = document.getElementById('deedName');
sire = document.getElementById('sire');

// Sets everything to default values upon refresh
const setDefault = () => {
    faction.value = "Human";
    claimedSelection.value = "Drone";
    claimedCheck.checked = false;
    energy.innerHTML = "10";
    updateSubfactionSelection();
}

// Updates the subfaction selection form(s) depending on the selected faction
const updateSubfactionSelection = () => {
    // Remove all options
    subfaction.innerHTML="";

    // Reveal the subfaction form if it was hidden earlier
    // subfaction.hidden = false;
    // subfactionLabel.hidden = false;
    subfactionForm.hidden = false;

    // Make all faction specfic subfaction dropdowns and their labels hidden again if not already
    shifterForm.hidden = true;
    wraithForm.hidden = true;

    // Make all other faction specific forms hidden if not already
    claimedForm.hidden = true;
    genRank.hidden = true;
    passionForm.hidden = true;
    sdsLabels.hidden = true;
    sdsInputs.hidden = true;
    // Undo any hiding of sds labels and inputs from before, if any
    sire.hidden = false;
    sireLabel.hidden = false;
    shadow.hidden = false;
    shadowLabel.hidden = false;
    deedName.hidden = false;
    deedNameLabel.hidden = false;

    let newOption;

    // Depending on selected faction, change the subfaction selections
    switch(faction.value){
        case "Human":
            humanSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });
            claimedForm.hidden = false;
            claimedSelection.value = "Drone";
            claimedCheck.checked = false;
            updateClaimedForm();       

            energy.innerHTML = 10;
            energyType.innerHTML = "Vitality";
            virtue.value = 7;
            virtueType.innerHTML = "Humanity";
            break;
        case "Shifter":
            // Reveal the shifter specific options and hide the subfaction selection
            shifterForm.hidden = false;
            genRank.hidden = false;
            rankForm.hidden = false;
            generationForm.hidden = true;
        
            subfactionForm.hidden = true;

            // Display the sds labels and inputs, then display only Deed Name fields
            sdsLabels.hidden = false;
            sdsInputs.hidden = false;

            sire.hidden = true;
            sireLabel.hidden = true;
            shadow.hidden = true;
            shadowLabel.hidden = true;

            energy.innerHTML = 20;
            energyType.innerHTML = "Gnosis";
            virtue.value = 7;
            virtueType.innerHTML = "Rage";
            break;
        case "Vampire":
            vampireSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });

            genRank.hidden = false;
            rankForm.hidden = true;
            generationForm.hidden = false;

            // Display the sds labels and inputs, then display only the Sire fields
            sdsLabels.hidden = false;
            sdsInputs.hidden = false;

            deedName.hidden = true;
            deedNameLabel.hidden = true;
            shadow.hidden = true;
            shadowLabel.hidden = true;

            energy.innerHTML = 15;
            energyType.innerHTML = "Vitae";
            virtue.value = 6;
            virtueType.innerHTML = "Road";
            break;
        case "Wraith":
            wraithForm.hidden = false;
            passionForm.hidden = false;

            subfactionForm.hidden = true;

            // Display the sds labels and inputs, then display only the Shadow fields
            sdsLabels.hidden = false;
            sdsInputs.hidden = false;

            sire.hidden = true;
            sireLabel.hidden = true;
            deedName.hidden = true;
            deedNameLabel.hidden = true;

            energy.innerHTML = 10;
            energyType.innerHTML = "Pathos";
            virtue.value = 4;
            virtueType.innerHTML = "Angst";
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

faction.addEventListener('change', updateSubfactionSelection);
claimedCheck.addEventListener('change', updateClaimedForm);

setDefault();