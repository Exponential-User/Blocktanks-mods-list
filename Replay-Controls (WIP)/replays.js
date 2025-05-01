class Recorder {
    /**
     * A flag which is set to true when recording is in progress
     * @type {Boolean}
     */
    _recording;

    /**
     * An object containing the recording data
     * @type {Object}
     */
    _recordingObject;

    /** @type {Number} */
    _previousAngle;

    constructor() {
        this._recording = false;
        this._previousAngle = undefined;
    }

    handleEvent(event, data) {
        if (!this._recording) return;

        if (event == 'ping' || event == 'pingServer') return; // Ignore this event

        this._logEvent(event, data);
    }

    handleBinary(data) {
        if (!this._recording) return;

        this._recordingObject.binaryBuffer.push({
            data: Array(...new Uint8Array(data)),
            timeOffset: Date.now() - this._recordingObject.startTime
        });
    }

    handleAiming(angle) {
        if (!this._recording) return;

        if (angle == this._previousAngle) return; // Don't make duplicate angle events
        this._previousAngle = angle;
        this._recordingObject.aimBuffer.push({
            angle,
            timeOffset: Date.now() - this._recordingObject.startTime
        });
    }

    handleWeaponSelect(weapon) {
        if (!this._recording) return;

        this._recordingObject.weaponBuffer.push({
            weapon,
            timeOffset: Date.now() - this._recordingObject.startTime
        });
    }

    handleRespawn(...params) {
        if (!this._recording) return;

        this._recordingObject.respawnBuffer.push({
            params,
            timeOffset: Date.now() - this._recordingObject.startTime
        });
    }

    _logEvent(eventName, eventData) {
        this._recordingObject.eventBuffer.push({
            event: eventName,
            data: eventData,
            timeOffset: Date.now() - this._recordingObject.startTime
        });
    }

    startRecording(welcomeData) {
        this._recording = true;
        this._recordingObject = {
            eventBuffer: [],
            binaryBuffer: [],
            aimBuffer: [],
            weaponBuffer: [],
            respawnBuffer: [],
            startTime: Date.now(),
            mapName: '',
            matchLength: 0,
            gameMode: '',
            matchID: '',
            gameServer: '',
            replayHost: window.name, // The username of whoever recorded this replay
            replayVersion: '1.0.2',
            key: Math.floor(Math.random() * Math.pow(2, 32)) // Used for storing replays
        };
        this._previousAngle = undefined;

        let config = welcomeData.config;
        this._recordingObject.mapName = welcomeData.mapKey;
        this._recordingObject.gameMode = config.mode;
        this._recordingObject.matchID = welcomeData.matchID;
        this._recordingObject.gameServer = window.currentGameURL;

        this._logEvent('welcome', welcomeData);
    }

    stopRecording() {
        this._recording = false;
        this._recordingObject.matchLength = Date.now() - this._recordingObject.startTime;
    }

    saveRecording() {
        return this._recordingObject;
    }

    isRecording() {
        return this._recording;
    }
}

class Player {
    /**
     * An object containing the recording data
     */
    _recordingObject;

    /**
     * A flag which is set to true when a replay is playing
     * @type {Boolean}
     */
    _playing;
 
    constructor() {
        this._playing = false;
    }

    loadRecording(recording) {
        this._recordingObject = recording;
    }

    returnPing() {
        if (!this._playing) return;
        window.socket.receiveEvent('ping', {timestamp: Date.now()});
    }

    playReplay() {
        document.getElementById("connecting").style.display = "block";
	    document.getElementById("startCopyLink").innerText = "Don't Copy";

        name = credentials.username;
        credentials.id = 'BlockTanks Replay';
        var shareableLink = 'BlockTanks Replay';
        document.getElementById("respawn_matchLink").value = document.getElementById("start_matchLink").value = shareableLink;
        window.ws = {
            onclose: () => {},
            onerror: () => {},
            onmessage: () => {},
            close: () => {},
            send: () => {}
        }
        let fancySocket = new window.FancyWebSocket(window.ws);

        this._startEventFiring(); // Must be called before the welcome event to avoid recording

        setEventHandlers(fancySocket);
        window.socket = fancySocket;
    }

    _startEventFiring() {
        this._playing = true;
        let startTime = Date.now();

        let eventReader = new EventReader(this._recordingObject.eventBuffer);
        let binaryReader = new EventReader(this._recordingObject.binaryBuffer);
        let aimReader = new EventReader(this._recordingObject.aimBuffer);
        let weaponReader = new EventReader(this._recordingObject.weaponBuffer);
        let respawnReader = new EventReader(this._recordingObject.respawnBuffer);

        let eventInterval = setInterval(() => {
            if (!this._playing) clearInterval(eventInterval);
            let offset = Date.now() - startTime;

            if (offset >= this._recordingObject.matchLength) {
                // End of recording reached! Stop.
                clearInterval(eventInterval);
                this.stopReplay();
                window.backToTitle();
            }

            eventReader.getEvents(offset).forEach(event => {
                window.socket.receiveEvent(event.event, event.data);

                if (event.event == 'welcome' && this._recordingObject.replayHost != window.name) {
                    // If this replay isn't ours, switch to spectator
                    startDynamicSpectate();
                }
            });
            binaryReader.getEvents(offset).forEach(event => {
                window.socket.receiveBinary(new Uint8Array(event.data).buffer);
            });
            aimReader.getEvents(offset).forEach(event => {
                window.aim_tank(event.angle, true); // The extra parameter allows it to pass blocking
            });
            weaponReader.getEvents(offset).forEach(event => {
                window.selectWeapon(event.weapon, true); // The extra parameter allows it to pass blocking
            });
            respawnReader.getEvents(offset).forEach(event => {
                window.respawn_user((event.params != undefined) ? event.params[0] : false, true); // The extra parameter allows it to pass blocking
            });
        });
    }

    stopReplay() {
        window.ws.onclose(); // Close the fake websocket
        this._playing = false;
    }

    isPlaying() {
        return this._playing;
    }
}

class EventReader {
    /**
     * The events for the EventReader
     * @type {Array}
     */
    _events;

    /**
     * The index of the first non-fired event
     * @type {Number}
     */
    _eventIndex;

    /**
     * Initialize the EventReader with events
     * @param {Array} events 
     */
    constructor(events) {
        this._events = events;
        this._eventIndex = 0;
    }

    /**
     * Return any new events which have activated by the offset
     * @param {Number} timeOffset 
     * @returns {Array} The events which have fired
     */
    getEvents(timeOffset) {
        let firedEvents = [];
        while (this._eventIndex < this._events.length) {
            let event = this._events[this._eventIndex];
            if (event.timeOffset <= timeOffset) {
                firedEvents.push(event);
                this._eventIndex++;
            } else {
                break;
            }
        }

        return firedEvents;
    }
}

/**
 * Import a recording from a file
 * @param {Blob}
 * @async
 * @returns {Object} The imported recording
 */
async function importRecording(blob) {
    let decoder = new TextDecoder();
    let data = new Uint8Array(await blob.arrayBuffer());

    return JSON.parse(decoder.decode(fflate.unzlibSync(data)));
}

/**
 * Convert a recording to a binary format
 * @param {Object}
 * @returns {Blob} The exported recording
 */
function exportRecording(recording) {
    let encoder = new TextEncoder();
    let text = JSON.stringify(recording);
    
    return new Blob([fflate.zlibSync(encoder.encode(text), {level: 4})]);
}

class Manager {
    /**
     * A flag which keeps track of if there aren't any replays
     * @type {{replay: Object, saved: Boolean}[]}
     */
    _noReplays;

    /**
     * The current version of replays. Used to upgrade old replays
     * @type {String}
     */
    _currentReplayVersion;

    /**
     * A list of keys currently on the replay list
     */
    _replayKeys;

    constructor() {
        this._noReplays = true;
        this._currentReplayVersion = '1.0.2';
        this._replayKeys = [];
        this._loadReplaysFromLocalStorage();
    }

    /**
     * Upload a replay to the title screen
     * @param {Object} replay - The replay JSON data
     * @param {Boolean} [saved] - Whether this replay should be marked as saved or not
     */
    uploadReplay(replay, saved=false) {
        // Try to upgrade the replay version if necessary
        let upgradedReplay = this._upgradeReplay(replay);
        if (!upgradedReplay) {
            // This replay cannot be loaded! Bad version
            alert('This replay is an old version and cannot be upgraded!');
            return;
        }
        replay = upgradedReplay;

        // Check if this replay is already uploaded
        for (let x=0; x<this._replayKeys.length; x++) {
            if (this._replayKeys == replay.key) {
                // This replay has already been uploaded!
                return;
            }
        }
        this._replayKeys.push(replay.key);

        // Remove no replays text if this is the first replay
        if (this._noReplays) {
            document.getElementById('replays-noreplays').style.display = 'none';
            document.getElementById('replays-replaytable').style.display = 'block';
            this._noReplays = false;
        }

        // Collect values
        let startTime = new Date(replay.startTime).toLocaleString();
        let map = replay.mapName;
        let mode = replay.gameMode;

        let seconds = Math.round(replay.matchLength / 1000);
        let minutes = Math.floor(seconds / 60);
        seconds %= 60;
        let minutesString = String(minutes);
        let secondsString = String(seconds);
        if (secondsString.length == 1) secondsString = '0' + secondsString;
        let matchLengthString = minutesString + ':' + secondsString;

        // Create elements
        let tr = document.createElement('tr');
        let values = [startTime, map, matchLengthString, mode].map(value => {
            let td = document.createElement('td');
            td.innerText = value;
            return td;
        });

        // Create buttons
        let downloadButton = document.createElement('input');
        downloadButton.type = 'button';
        downloadButton.value = 'Download'
        downloadButton.addEventListener('click', () => {
            let date = new Date(replay.startTime);
            const fileName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${replay.mapName}.btnks`;
            window.saveAs(exportRecording(replay), fileName); // saveAs imported from FileSaver.min.js
        });

        let playButton = document.createElement('input');
        playButton.type = 'button';
        playButton.value = 'Play'
        let player = window.player;
        playButton.addEventListener('click', () => {
            player.loadRecording(replay);
            player.playReplay();
        });

        let saveButton = document.createElement('input');
        saveButton.type = 'checkbox';
        saveButton.checked = saved;
        saveButton.addEventListener('change', () => {
            if (saveButton.checked) {
                // Save this replay to local storage
                this._saveReplayToLocalStorage(replay);
            } else {
                // Remove this replay from local storage
                this._removeReplayFromLocalStorage(replay);
            }
        });
        if (saved) {
            this._saveReplayToLocalStorage(replay);
        }

        // Add elements
        values.forEach(el => {
            tr.appendChild(el);
        });
        [downloadButton, playButton, saveButton].forEach(el => {
            let td = document.createElement('td');
            td.appendChild(el);
            tr.appendChild(td);
        })
        document.querySelector('#replays-replaytable>table').appendChild(tr);
    }

    async _loadReplaysFromLocalStorage() {
        let storedReplays = localStorage.getItem('replays');
        if (!storedReplays) {
            // No replays stored!
            return;
        }
        storedReplays = JSON.parse(storedReplays);

        for (let x=0; x<storedReplays.length; x++) {
            let storedReplay = storedReplays[x];
            await new Promise((resolve, reject) => {
                fetch(storedReplay.data).then(res => res.blob()).then(async blob => {
                    let recording = await importRecording(blob);
                    this.uploadReplay(recording, true);
                    resolve();
                }).catch(error => reject(error));
            });
        }
    }

    _saveReplayToLocalStorage(replay) {
        let storedReplays = localStorage.getItem('replays');
        if (storedReplays) {
            storedReplays = JSON.parse(storedReplays);
        } else {
            storedReplays = [];
        }

        // Check if this replay already exists
        for (let x=0; x<storedReplays.length; x++) {
            let storedReplay = storedReplays[x];
            if (storedReplay.key == replay.key) {
                // This replay has already been stored! Don't save it
                return;
            }
        }
        
        // Save key and replay data
        let replayData = exportRecording(replay);
        let reader = new FileReader();
        reader.readAsDataURL(replayData);
        reader.onloadend = () => {
            storedReplays.push({
                data: reader.result,
                key: replay.key
            });

            try {
                localStorage.setItem('replays', JSON.stringify(storedReplays));
            } catch (error) {
                // Unable to save replay! Either out of storage or localStorage is disabled
                alert('Unable to save replay! Error: ' + String(error));
            }
        };
    }

    _removeReplayFromLocalStorage(replay) {
        let storedReplays = localStorage.getItem('replays');
        if (!storedReplays) {
            // No replays exist!
            return;
        }
        storedReplays = JSON.parse(storedReplays);
        
        // Try to find the replay and remove it
        for (let x=0; x<storedReplays.length; x++) {
            let storedReplay = storedReplays[x];
            if (storedReplay.key == replay.key) {
                storedReplays.splice(x, 1);

                localStorage.setItem('replays', JSON.stringify(storedReplays));
            }
        }
    }

    _upgradeReplay(replay) {
        while (replay.replayVersion != this._currentReplayVersion) {
            switch (replay.replayVersion) {
                case '1.0.0':
                    // "key" attribute was added
                    replay.key = Math.floor(Math.random() * Math.pow(2, 32));
                    replay.replayVersion = '1.0.1';
                    break;
                case '1.0.1':
                    // "replayHost" attribute was added
                    for (let x=0; x<replay.eventBuffer.length; x++) {
                        // Try to guess the host of this replay based on who hasn't spawned in yet when replay starts
                        let event = replay.eventBuffer[x];
                        if (event.event == 'tank info') {
                            let idPoolNames = Object.keys(event.data.idPool);
                            let tankNames = Object.keys(event.data.tanks);
                            tankNames.forEach(tankName => {
                                idPoolNames.splice(idPoolNames.indexOf(tankName), 1);
                            });

                            // idPoolNames should be left with tanks which haven't spawned yet
                            if (idPoolNames.length == 1) {
                                // This must be us!
                                replay.replayHost = idPoolNames[0];
                            } else {
                                // Not sure who made this replay then...
                                replay.replayHost = '';
                            }
                            break;
                        }
                    }
                    if (replay.replayHost == undefined) {
                        // This replay cannot be upgraded!
                        replay.replayVersion = '';
                    } else {
                        replay.replayVersion = '1.0.2';
                    }
                    break;
                case '1.0.2':
                    break;
                    // Current version! Just here for visualization
                default:
                    // Unknown version!
                    return undefined;
            }
        }

        return replay;
    }
}

var recorder = new Recorder();
var player = new Player();
var manager = new Manager();

window.addEventListener('load', () => {
	document.getElementById('replays-uploadbutton').addEventListener('click', async () => {
		let files = document.getElementById('replays-replayupload').files;
		
		// Upload each recording
		let replays = await Promise.all(Array(...files).map(file => importRecording(file)));
		replays.forEach(replay => manager.uploadReplay(replay));

		// Clear the upload box
		document.getElementById('replays-replayupload').value = '';
	}
)});
