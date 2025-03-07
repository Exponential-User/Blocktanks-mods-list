let lastPlayers = [];
let lobbyData = {};
let currentPlayers = [];
const delay1 = 750; /*
Delay the function by 750ms (Default: 750), Minimum: 200, Recommended: 500-1000.
You can change this value to your liking, But You have to change it before running the script.
You cant change it while the script is running.
*/

async function getData() {
    if (delay1 < 200) {
        return console.error("Delay is too low! Please set it to 200 or higher!");
    }

    try {
        await getFromServer("/lobby", function(data) {
            lobbyData = data.games;
        });
    } catch (error) {
        console.warn("getFromServer function is not working, Using fetch as backup!\nError: " + error);
        try {
            const response = await fetch('https://blocktanks.net/lobby', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            lobbyData = data.games;
        } catch (fetchError) {
            console.error("Error! Can't get game data!\nError:", fetchError);
            return;
        }
    }

    for (const key in lobbyData) {
        const players = lobbyData[key].players;
        const currentServer = players.some(player => player.username == credentials.username);
        const cICIS = Object.values(lobbyData).every(game => !game.players.some(player => player.username == credentials.username))
        if (cICIS) {
            currentPlayers = [];
            lastPlayers = [];
        }
        for (let i = 0; i < players.length; i++) {
            if (!lastPlayers.includes(players[i].username) && currentServer && !cICIS) {
                currentPlayers.push(players[i].username);
                if (players[i].username != credentials.username) {
                    handler('log', `${players[i].username} has joined the lobby`);
                    console.debug("Player joined: " + players[i].username);
                } else if (players[i].username == credentials.username) {
                    handler('speciallog', `You have joined the lobby`);
                }
            }
            if (currentPlayers.length > players.length && currentServer) {
                const leavingPlayers = lastPlayers.filter(player => !players.map(p => p.username).includes(player));
                leavingPlayers.forEach(player => {
                    handler('log', `${player} has left the lobby`);
                    console.debug("Player left: " + player);
                });
                currentPlayers = players.map(player => player.username);
            }
            // if (currentServer) { // DEBUGGING
            //     console.debug("Player: " + players[i].username,"\ninclueded in lastPlayers: " + lastPlayers.includes(players[i].username),"\ninclueded in currentPlayers: " + currentPlayers.includes(players[i].username));
            //     console.debug("players.length: " + players.length,"\ncurrentPlayers.length: " + currentPlayers.length);
            // }
        }
    }

    lastPlayers = [...currentPlayers];
}

function handler(type, msg = 'No message provided', specialLog1 = '', specialLog2 = true) { // 1 and 2 are not currently used, but are here for future use.
    if (type === 'log') {
        log(`[Join-Alert] ${msg}`);
    } else if (type === 'speciallog') {
        specialLog(`[Join-Alert] ${msg}`, specialLog1, specialLog2);
    } else {
        console.log('[Join-Alert] Invalid type provided');
    }
}

const interval = setInterval(getData, delay1);