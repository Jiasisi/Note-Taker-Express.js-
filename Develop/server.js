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

    let response;
    if (req.body && req.body.title) {
        response = {
            status: 'success',
            data: req.body,
        };
        notesDate.push(req.data);
        res.json(`Note for ${response.data.title} has been added!`);
    
    } else {
        res.json('Note body must at least contain a title');

    }
    console.log(req.body);
});





app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

