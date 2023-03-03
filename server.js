const express = require('express');
const path  = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const sheets = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for createSheet page
app.get('/createSheet', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/createSheet.html'))
);

// GET Route for viewSheet.html
app.get('/viewSheet', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/viewSheet.html'))
);

app.get('/api/sheets', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  return res.json(sheets);
});

app.post('/api/sheet', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

  // Destructuring assignment for the items in req.body
  const { player, character, faction, subfaction, patron, note } = req.body;

  // If all the required properties are present
  if (player && character && faction && subfaction && patron && note) {
    // Variable for the object we will save
    const newSheet = {
      player,
      character,
      faction,
      subfaction,
      patron,
      note,
      sheet_id: uuid(),
    };

    // push the new sheet to the array
    sheets.push(newSheet);
    let newSheets = JSON.stringify(sheets);

    // write file to the db folder
    fs.writeFile(`./db/db.json`, newSheets, err => {
        err ? console.error(err) : console.log('Success!')
    });

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);