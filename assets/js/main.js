const container = document.getElementById('container');
const text = document.getElementById('text');
const currentinput = document.getElementById('currentinput');

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/\\=%&$#@!?~^()[]{}|<>"\'`.,;:_ ';

const commands = {
    'help': 'display this help message',
    'clear': 'clear the terminal screen',
    'echo': 'display a line of text',
    'hostname': 'display the hostname of the system',
    'username': 'display the username of the system',
    'history': 'display the history of commands',
    'ls': 'list directory contents',
    'cd': 'change directory',
    'mkdir': 'make directory',
    'touch': 'create a file',
    'rm': 'remove a file',
    'mv': 'move a file',
    'cp': 'copy a file',
    'cat': 'read a file',
    'pwd': 'print working directory',
    'exit': 'exit the terminal'
}

let hostname = 'dablincx.dev';
let username = 'guest';
let history = [];
let reversehistoryindex = 0;

let path = `/home/guest`;

let root = {
    name: 'root',
    type: 'dir',
    path: '/',
    children: [
        {
            name: 'home',
            type: 'dir',
            path: '/home',
            children: [
                {
                    name: 'guest',
                    type: 'dir',
                    path: '/home/guest',
                    children: []
                }
            ]
        }
    ]
}

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
        case 'ArrowUp':
            if (reversehistoryindex < history.length) {
                reversehistoryindex++;
                currentinput.innerHTML = history[history.length - reversehistoryindex];
            }
            break;
        case 'ArrowDown':
            if (reversehistoryindex > 1) {
                reversehistoryindex--;
                currentinput.innerHTML = history[history.length - reversehistoryindex];
            } else if (reversehistoryindex == 1) {
                reversehistoryindex--;
                currentinput.innerHTML = '';
            }
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
    let cmdlst = [];
    let cmd1 = '';
    // split the command into an array
    cmdlst = cmd.split(' ');

    // get the first item in the array
    cmd1 = cmdlst[0];

    if (cmd1 != '') {
        history.push(cmd);
    }

    // switch case for clean code
    switch (cmd1) {
        case '':
            break;
        case 'help':
            handleHelp(cmdlst)
            break;
        case 'clear':
            text.innerHTML = '';
            break;
        case 'echo':
            handleEcho(cmdlst);
            break;
        case 'hostname':
            text.innerHTML += hostname + '<br>';
            break;
        case 'username':
            text.innerHTML += username + '<br>';
            break;
        case 'history':
            handleHistory(cmdlst);
            break;
        case 'ls':
            handleLs(cmdlst);
            break;
        case 'cd':
            handleCd(cmdlst);
            break;
        case 'mkdir':
            handleMkdir(cmdlst);
            break;
        case 'touch':
            handleTouch(cmdlst);
            break;
        case 'rm':
            handleRm(cmdlst);
            break;
        case 'mv':
            handleMv(cmdlst);
            break;
        case 'cp':
            handleCp(cmdlst);
            break;
        case 'cat':
            handleCat(cmdlst);
            break;
        case 'pwd':
            text.innerHTML += path + '<br>';
            break;
        case 'exit':
            window.close();
            break;
        default:
            text.innerHTML += 'command ' + cmd + ' not found<br>';
    }

    text.innerHTML += prompt();
}

function handleHelp(cmdlst) {
    if (cmdlst.length == 1) {
        text.innerHTML += 'Available commands:<br>';
        for (const [key, value] of Object.entries(commands)) {
            text.innerHTML += `${key}: ${value}<br>`;
        }
    } else {
        try {
            text.innerHTML += cmdlst[1] + ": " + commands[cmdlst[1]] + '<br>';
        } catch (error) {
            text.innerHTML += 'command ' + cmdlst[1] + ' not found<br>';
        }
    }
}

function handleEcho(cmdlst) {
    if (cmdlst.length == 1) {
        text.innerHTML += '<br>';
    } else {
        text.innerHTML += cmdlst.slice(1).join(' ') + '<br>';
    }
}

function handleHistory(cmdlst) {
    if (cmdlst.length == 1) {
        for (let i = 0; i < history.length; i++) {
            text.innerHTML += `${i + 1} ${history[i]}<br>`;
        }
    } else if (cmdlst[1] == '-c') {
        history = [];
    } else if (cmdlst[1] == '-h') {
        text.innerHTML += 'history: ' + commands['history'] + '<br>';
    }
}