let lastPlayers = [];
let currentPlayers = [];

const delay1 = 500;
/*
 *   Delay the function by 500ms (Default: 500), Minimum: 200, Recommended: 350-1000.
 *   You can change this value to your liking, but you have to change it before running the script.
 *   You can't change it while the script is running.
 */

function getData() {
    if (delay1 < 200) {
        clearInterval(interval1);
        return console.error("Delay is too low! Please set it to 200 or higher!")
    };

    const newPlayerKeys = [];

    for (const key in server_tanks) {
        if (isFull(server_tanks)) {
            if (key.toLowerCase().includes("[bot]")) continue;

            newPlayerKeys.push(key);

            if (!lastPlayers.includes(key)) {
                if (key !== name) {
                    specialLog('[Join-Alert]', `${key} has joined the match`, false, true);
                } else {
                    specialLog('[Join-Alert]', 'You have joined the match', false, true);
                }
            }
        }
    }

    const leavingPlayers = lastPlayers.filter(player => !newPlayerKeys.includes(player));
    leavingPlayers.forEach(player => {
        specialLog('[Join-Alert]', `${player} has left the match`, false, true);
    });

    currentPlayers = [...newPlayerKeys];
    lastPlayers = [...currentPlayers];
}

function isFull(obj) {
    return Object.keys(obj).length > 0;
}

const interval1 = setInterval(getData, delay1);
