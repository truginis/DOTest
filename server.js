const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');

const api = require('./api');

let app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});

module.exports = app;
