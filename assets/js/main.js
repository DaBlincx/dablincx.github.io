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
    'source': 'reload the page',
    'color': 'change the color of the terminal',
    'exit': 'exit the terminal'
}

function ghlnk(project) {
    return '<a href=\"https://github.com/dablincx/' + project + '\">https://github.com/dablincx/' + project + '</a>'
}

let hostname = 'dablincx.dev';
let username = 'guest';
let history = [];
let reversehistoryindex = 0;

let path = `/home/guest`;

let root = {
    'home': {
        'guest': {
            'projects': {
                'dablincx.dev.txt': 'dablincx.dev\n\nthis is my portfolio website (you are using it right now)\ni created it because i want a cool website where i can show some of my stuff but i absolutely hate frontend development so i decided to make a terminal website instead\n\n' + ghlnk('dablincx.github.io'),

                'nethax.txt': 'nethax\n\nnethax is a fake hacking simulation tool similar to the linux programm \'hollywood\' but slightly worse and developed on macos which means it has limited functionality on other operating systems\n(for example the wifi scanning thingy uses a macos utility called airport and i was too lazy to implement something similar on any other os)\ni dont even know if it even works on modern python versions because i havent updated it in soo long\n\n' + ghlnk('nethax'),

                'zynx.txt': 'zynx\n\nzynx is a simple webbrowser written in python using pyqt5\nit is not very good and i dont recommend using it\nit also has only one tab and no bookmarks or anything like that\nits stupid to even try it out (please dont) (its also very not up to date with anything)\n\n' + ghlnk('zynx'),

                'meme-video-gen': 'meme-video-gen\n\npython script that generates a meme compilation video from a bunch of videos\nmaybe ill add auto upload to youtube someday\n\n' + ghlnk('meme-video-gen'),
            },
            'info.txt': 'hi!\nthis is a semi interactive terminal portfolio website i made out of boredom and because i wanted to try something new.\ni hope you enjoy your stay!'
        }
    }
}

const prompt = () => {
    let promptpath;
    if (path == `/home/${username}`) {
        promptpath = '~';
    } else {
        promptpath = path;
    }
    return `${username}@${hostname}:${promptpath}$`;
}

text.innerHTML += "welcome to dablincx.dev!<br>run 'help' for a list of commands<br><br>";

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
        case 'sudo':
            text.innerHTML += 'nice try fbi<br>';
            break;
        case 'source':
            window.location.reload();
            break;
        case 'color':
            handleColor(cmdlst);
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
            text.innerHTML += `- ${key}: ${value}<br>`;
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

function handleColor(cmdlst) {
    if (cmdlst.length == 1) {
        text.innerHTML += 'color: ' + commands['color'] + '<br>';
    } else if (cmdlst.length == 2) {
        document.body.style.color = cmdlst[1];
    } else if (cmdlst.length == 3) {
        document.body.style.color = cmdlst[1];
        document.body.style.backgroundColor = cmdlst[2];
    } else {
        text.innerHTML += 'too many arguments<br>';
    }
}

function handleLs(cmdlst) {
    text.innerHTML += "not yet implemented" + '<br>';
}

function cd(cdpathlst, newpath, recursions=0) {
    // cdpathlst is a list
    // function that goes into cdpathlst[0] and removes that element from the list
    // then calls itself with the new list
    // if cdpathlst is empty, return the current full path
    // if cdpathlst[0] is .., go back one directory
    // if cdpathlst[0] is ., do nothing
    // if cdpathlst[0] is a directory, go into that directory

    let current = root;
    let newpathlst = [];

    if (recursions == 0 && cdpathlst.length == 0) {
        return path;
    }

    // check if cdpathlst[0] is a valid directory

    if (cdpathlst[0] == '..') {
        // go back one directory
        newpathlst = path.split('/');
        newpathlst.pop();
        newpath = newpathlst.join('/');
        return cd(cdpathlst.slice(1), newpath, recursions + 1);
    } else if (cdpathlst[0] == '.') {
        // do nothing
        return cd(cdpathlst.slice(1), path, recursions + 1);
    } else if (cdpathlst[0] in current) {
        // go into that directory
        newpath = path + '/' + cdpathlst[0];
        return cd(cdpathlst.slice(1), newpath, recursions + 1);
    } else {
        // directory not found
        return 'directory not found';
    }

}


function handleCd(cmdlst) {
    let newpath = '';
    let cdpathlst = [];
    if (cmdlst.length == 1) {
        path = `/home/${username}`;
    } else {
        cdpathlst = cmdlst[1].split('/');
        newpath = cd(cdpathlst, path);
        if (newpath == 'directory not found') {
            text.innerHTML += 'directory not found<br>';
        } else {
            path = newpath;
        }
    }
}

function handleMkdir(cmdlst) {
    text.innerHTML += "not yet implemented" + '<br>';
}

function handleTouch(cmdlst) {
    text.innerHTML += "not yet implemented" + '<br>';
}

function handleRm(cmdlst) {
    text.innerHTML += "not yet implemented" + '<br>';
}

function handleMv(cmdlst) {
    text.innerHTML += "not yet implemented" + '<br>';
}

function handleCp(cmdlst) {
    text.innerHTML += "not yet implemented" + '<br>';
}

function handleCat(cmdlst) {
    text.innerHTML += "not yet implemented" + '<br>';
}
