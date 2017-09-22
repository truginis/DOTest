document.onload = init();

let socket = io.connect('http://localhost:3000');
var input;
var button;
var messageDisplay;
var userCount;

function init() {
    input = document.getElementById('chatText');
    button = document.getElementById('chatButton');
    messageDisplay = document.getElementById('messageDisplay');
    userCount = document.getElementById('userCount');

    button.addEventListener('click', onSubmit)
    input.addEventListener('keyup', onKeyUp);
    input.setAttribute('autocomplete', 'off');
}

function onKeyUp(event) {
    if (event.keyCode === 13) onSubmit(event);
}

function onSubmit(event) {
    if ( input.value === '') return;
    socket.emit('chat message', input.value);
    input.value = '';
    input.focus();
}

socket.on('chat message', function (message) {
    manageMessages(message);
});

socket.on('user count', function (count) {
    userCount.innerText = count;
});


function manageMessages(message) {
    var messageKeepCount = 10;

    // check to see if we need to remove a list item
    if (messageDisplay.childElementCount === messageKeepCount ) {
        messageDisplay.removeChild(messageDisplay.children[messageKeepCount - 1])
    }

    // create new li and inset into ul
    var li = document.createElement('li');
    li.innerText = message;
    messageDisplay.insertBefore(li, messageDisplay.children[0]);

    var childCount = messageDisplay.childElementCount;
    var decreaseValue = 1 / (childCount + 1);
    // fade them a little
    for (var i = 0; i < childCount; i++) {
        var obj = messageDisplay.children[i];
        var opacity = 1 - i*decreaseValue;
        obj.setAttribute('style', 'opacity: ' + opacity);
    }

}