const express = require('express');
const path  = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');
//const sheet = require('./db/db.json');

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
  res.sendFile(path.join(__dirname, '/public/viewSheet.html'))
);

// GET Route for testsheet.html
app.get('/testSheet', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/testSheet.html'))
);

// Shelving this for now
app.get('/api/sheet', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  return res.json(sheet);
});

app.post('/api/sheet', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

  // Destructuring assignment for the items in req.body
  const { player, character, faction, subfaction, patron, note } = req.body;

  // If all the required properties are present
  if (player && character && faction && subfaction) {
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

    console.log(newSheet);

    let newContent = JSON.stringify(newSheet);

    // write file to the db folder
    // fs.writeFile(`./db/db.json`, newContent, err => {
    //     err ? console.error(err) : console.log('Success!')
    // });

    const response = {
      status: 'success',
      body: newSheet,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);