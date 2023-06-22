const homeRouter = require('express').Router();
const path = require('path');

homeRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})


homeRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));

})


module.exports = homeRouter;
