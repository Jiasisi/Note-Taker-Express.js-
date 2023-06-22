const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3001;

const app = express();
const apiRouter = require('./Develop/routers/apiRouter');
const homeRouter = require('./Develop/routers/homeRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('Develop/public'));

app.use('/api', apiRouter);
app.use('/', homeRouter);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);





