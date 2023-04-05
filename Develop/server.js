const express = require('express');
const path = require('path');

const notesDate = require('./db/notes');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);



app.get('/api/notes', (req, res) => {
    console.log(`${req.method} request received`);
    res.json(notesDate)
});

app.post('/api/notes', (req, res) => {
    console.log(`${req.method} request received`);

    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
        };
        
        const response = {
            status: 'success',
            body: newNote,
        };
  
        notesDate.push(newNote);
        console.log(`Note for ${response.data.title} has been added!`);
    
    } else {
        console.log('Note body must at least contain a title');

    }
    console.log(req.body);
});





app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

