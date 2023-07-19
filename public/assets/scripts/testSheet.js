let humanSubfaction = ["Commoner", "Ghoul", "Gifted Kinfolk", "Kinfolk", "Sorcerer"];
let vampireSubfaction = ["Assamite", "Baali", "Brujah", "Caitiff", "Cappadocian", "Gangrel", "Giovanni", "Lamia", "Lasombra", "Malkavian", "Nosferatu", "Ravnos", "Salubri", "Toreador", "Tremere", "Tzimisce", "Ventrue"];

faction = document.getElementById('faction');
subfaction = document.getElementById('subfaction');

breedSelection = document.getElementById('shifterBreed');
auspiceSelection = document.getElementById('shifterAuspice');
tribeSelection = document.getElementById('shifterTribe');
breedLabel = document.getElementById('breedLabel');
auspiceLabel = document.getElementById('auspiceLabel');
tribeLabel = document.getElementById('tribeLabel');
subfactionLabel = document.getElementById('subfactionLabel');

shifterForm = document.getElementById('shifterForm');

legionSelection = document.getElementById('wraithLegion');
guildSelection = document.getElementById('wraithGuild');
legionLabel = document.getElementById('legionLabel');
guildLabel = document.getElementById('guildLabel');

wraithForm = document.getElementById('wraithForm');

claimedForm = document.getElementById('claimedForm');
claimedCheck = document.getElementById('claimedCheck');
claimedSelection = document.getElementById('claimedSelection');
claimedLabel = document.getElementById('claimedLabel');

energy = document.getElementById('energy');

const setDefault = () => {
    faction.value = "Human";
    claimedSelection.value = "Drone";
    claimedCheck.checked = false;
    energy.innerHTML = "10";
}

const updateSubfactionSelection = () => {
    // Remove all options
    subfaction.innerHTML="";

    // Reveal the subfaction selection and label if it was hidden earlier
    subfaction.hidden = false;
    subfactionLabel.hidden = false;

    // Make all faction specfic subfaction dropdowns and their labels hidden again if not already
    // breedSelection.hidden = true;
    // auspiceSelection.hidden = true;
    // tribeSelection.hidden = true;
    // breedLabel.hidden = true;
    // auspiceLabel.hidden = true;
    // tribeLabel.hidden = true;

    shifterForm.hidden = true;

    // legionSelection.hidden = true;
    // guildSelection.hidden = true;
    // legionLabel.hidden = true;
    // guildLabel.hidden = true;

    wraithForm.hidden = true;

    claimedForm.hidden = true;

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
            claimedSelection.value = "Drone";
            claimedCheck.checked = false;
            updateClaimedForm();       

            energy.innerHTML = 10;

            virtue.value = 7;
            break;
        case "Shifter":
            // Reveal the breed, auspice, and tribe options and hide the subfaction selection
            breedSelection.hidden = false;
            auspiceSelection.hidden = false;
            tribeSelection.hidden = false;
            breedLabel.hidden = false;
            auspiceLabel.hidden = false;
            tribeLabel.hidden = false;

            shifterForm.hidden = false;
        
            subfaction.hidden = true;
            subfactionLabel.hidden = true;

            energy.innerHTML = 20;

            virtue.value = 7;
            break;
        case "Vampire":
            vampireSubfaction.forEach((el) => {
                newOption = document.createElement("option");
                newOption.text = el;
                newOption.value = el;

                subfaction.add(newOption);
            });

            energy.innerHTML = 15;

            virtue.value = 6;
            break;
        case "Wraith":
            legionSelection.hidden = false;
            guildSelection.hidden = false;
            legionLabel.hidden = false;
            guildLabel.hidden = false;

            wraithForm.hidden = false;

            subfaction.hidden = true;
            subfactionLabel.hidden = true;

            energy.innerHTML = 10;
            
            virtue.value = 4;
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