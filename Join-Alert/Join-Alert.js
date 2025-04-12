let lastPlayers = [];
let currentPlayers = [];

const delay1 = 750; /*
Delay the function by 750ms (Default: 750), Minimum: 200, Recommended: 500-1000.
You can change this value to your liking, but you have to change it before running the script.
You can't change it while the script is running.
*/

function getData() {
    if (delay1 < 200) {
        return console.error("Delay is too low! Please set it to 200 or higher!");
    }

    const newPlayerKeys = [];

    for (const key in server_tanks) {
        if (isFull(server_tanks)) {
            if (key.toLowerCase().includes("[bot]")) continue;

            newPlayerKeys.push(key);

            if (!lastPlayers.includes(key)) {
                if (key !== name) {
                    handler('log', `${key} has joined the match`);
                    console.debug("Player joined: " + key);
                } else {
                    handler('speciallog', `You have joined the lobby`);
                }
            }
        }
    }

    // Detect players who have left
    const leavingPlayers = lastPlayers.filter(player => !newPlayerKeys.includes(player));
    leavingPlayers.forEach(player => {
        handler('log', `${player} has left the match`);
        console.debug("Player left: " + player);
    });

    // Update player lists
    currentPlayers = [...newPlayerKeys];
    lastPlayers = [...currentPlayers];
}

function handler(type, msg = 'No message provided', specialLog1 = '', vipText = true) {
    if (type === 'log') {
        log(`[Join-Alert] ${msg}`);
    } else if (type === 'speciallog') {
        specialLog(`[Join-Alert] ${msg}`, specialLog1, vipText);
    } else {
        console.log('[Join-Alert] Invalid type provided');
    }
}

function isFull(obj) {
    return Object.keys(obj).length > 0;
}

setInterval(getData, delay1);
