const apiRouter = require('express').Router();
const { V4: uuidv4 } = require('uuid');

const util = require('util');
const fs = require('fs');

const readNotes = util.promisify(fs.readFile);
const writeNotes = util.promisify(fs.writeFile);


apiRouter.get('./notes', (req, res) => {
    console.log(`${req.method} request received`);
    readNotes('Develop/db/db.json', 'utf-8')
        .then(data => {
            console.log(data);
            return res.json(JSON.parse(data));
        })
        .catch(err => console.error(err));
   
});
 
apiRouter.post('./notes', (req, res) => {
    console.log(`${req.method} request received`);

    let newNote = req.body;
    newNote.id = uuidv4();

    readNotes('Develop/db/db.json', 'utf-8')
        .then (data => {
            console.log(data);

            const notes = JSON.parse(data);
            notes.push(newNote);

            writeNotes('Develop/db/db.json', JSON.stringify(notes));
            return res.json(notes);

        })
        .catch (err => console.error(err));
});


       



