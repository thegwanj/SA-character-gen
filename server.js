const express = require('express');
const path  = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/createSheet', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/createSheet.html'))
);

app.get('/api/notes', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  return res.json(notes);
});

app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    // push the new note to the array
    notes.push(newNote);
    let newNotes = JSON.stringify(notes);

    // write file to the db folder
    fs.writeFile(`./db/db.json`, newNotes, err => {
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