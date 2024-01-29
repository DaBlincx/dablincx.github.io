const container = document.getElementById('container');
const text = document.getElementById('text');
const currentinput = document.getElementById('currentinput');

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/\\=%&$#@!?~^()[]{}|<>"\'`.,;:_ ';


let hostname = 'dablincx.dev';
let username = 'guest';

const prompt = () => {
    return `${username}@${hostname}:~$`;
}

text.innerHTML += prompt();

// add keydown event listener to the window
window.addEventListener('keydown', (e) => {
    // if key pressed is in the chars string, then add it to the container
    // if (chars.includes(e.key)) {
    //     text.innerHTML += e.key;
    // } else if (e.key === 'Backspace') {
    //     // if backspace is pressed, remove the last character from the container
    //     text.innerHTML = text.innerHTML.slice(0, -1);
    // } else if (e.key === 'Enter') {
    
    // switch case for clean code 

    switch (e.key) {
        case 'Backspace':
            currentinput.innerHTML = currentinput.innerHTML.slice(0, -1);
            break;
        case 'Enter':
            cmd = currentinput.innerHTML;
            text.innerHTML += ' ' + cmd + '<br>';
            currentinput.innerHTML = '';
            runCommand(cmd);
            break;
        case 'Tab':
            currentinput.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
            break;
        default:
            if (chars.includes(e.key)) {
                currentinput.innerHTML += e.key;
            } else {
                console.log('key ' + e.key + ' not found or not implemented');
            }
    }
});

function runCommand(cmd) {
    // split the command into an array
    cmd = cmd.split(' ');

    // get the first item in the array
    cmd = cmd[0];

    // switch case for clean code
    switch (cmd) {
        case 'help':
            text.innerHTML += 'help: shows this help message<br>';
            text.innerHTML += 'clear: clears the screen<br>';
            text.innerHTML += 'echo: echos the input<br>';
            text.innerHTML += 'hostname: shows the hostname<br>';
            text.innerHTML += 'username: shows the username<br>';
            text.innerHTML += 'color: sets the color of the text<br>';
            text.innerHTML += 'background: sets the background color<br>';
            break;
        case 'clear':
            text.innerHTML = '';
            break;
        case 'echo':
            cmd.shift();
            text.innerHTML += cmd.join(' ') + '<br>';
            break;
        case 'hostname':
            text.innerHTML += hostname + '<br>';
            break;
        case 'username':
            text.innerHTML += username + '<br>';
            break;
        default:
            text.innerHTML += 'command ' + cmd + ' not found<br>';
    }

    text.innerHTML += prompt();
}
            