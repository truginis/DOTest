let express = require('express');
let app = express();
let path = require('path');
let http = require('http').Server(app);
let io = require('socket.io')(http);

let port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket)=>{
    console.log(`A user has connected`);
    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });

    socket.on('chat message', (data)=> {
        console.log(`Received a message of: ${data}`);
    })
});

http.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

/*
// Regular server setup
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
    console.log(`Listening on port ${port}`);
});

module.exports = app;
*/
