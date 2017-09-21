document.onload = init();

let socket = io();
var input;
var button;

function init() {
    input = document.getElementById('chatText');
    button = document.getElementById('chatButton');
    button.addEventListener('click', onSubmit)
};

function onSubmit(event) {
    console.log(`Send message: ${input.value}`);
    socket.emit('chat message', input.value);
}