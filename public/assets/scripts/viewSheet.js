// TODO: Take variables from createSheet.js and use them here in a similar fashion. We'll need to use the GET route to pull down the data from db.json and use it to put in values to the fields
let playerName;
let characterName;
let faction;
let subfaction;
let patron;
let note;

// Variable for buttons
let homeBtn;
let backBtn;

// Variables for future versions
let xpCost;
let freebies;

// Assign variables to form elements if we are at the form
if(window.location.pathname === '/viewSheet'){
    playerName = document.getElementById('playerName');
    characterName = document.getElementById('characterName');
    faction = document.getElementById('faction');
    subfaction = document.getElementById('subfaction');
    patron = document.getElementById('patron');
    note = document.getElementById('notes');

    homeBtn = document.getElementById('homeBtn');
}

// Function that gets info from db
const getSheet = () => {
    fetch('/api/sheet', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const renderSheet = async (sheet) => {
    // let jsonNotes = await notes.json();
    // if (window.location.pathname === '/notes') {
    //   noteList.forEach((el) => (el.innerHTML = ''));
    // }
  
    // let noteListItems = [];
  
    // // Returns HTML element with or without a delete button
    // const createLi = (text, delBtn = true) => {
    //   const liEl = document.createElement('li');
    //   liEl.classList.add('list-group-item');
  
    //   const spanEl = document.createElement('span');
    //   spanEl.classList.add('list-item-title');
    //   spanEl.innerText = text;
    //   spanEl.addEventListener('click', handleNoteView);
  
    //   liEl.append(spanEl);
  
    //   if (delBtn) {
    //     const delBtnEl = document.createElement('i');
    //     delBtnEl.classList.add(
    //       'fas',
    //       'fa-trash-alt',
    //       'float-right',
    //       'text-danger',
    //       'delete-note'
    //     );
    //     delBtnEl.addEventListener('click', handleNoteDelete);
  
    //     liEl.append(delBtnEl);
    //   }
  
    //   return liEl;
    // };
}

// Function that gets sheet from db and renders it to the page
const getAndRenderSheet = () => getSheet().then(renderSheet);

getAndRenderSheet();