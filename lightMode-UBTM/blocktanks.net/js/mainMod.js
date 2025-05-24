/* 

Roles:

credentials.roles
credentials.roles.communityManager
credentials.roles.esports
credentials.roles.moderator
credentials.roles.superModHelper
credentials.roles.developer

Theres probably more roles, but these are the ones I found.

-----------------------------------

used creds:

credentials.roles
credentials.verified
credentials.id
credentials.username
credentials.displayname
credentials.nameStatus
credentials.nameStatus.shadowBan --- ???
credentials.nameStatus.questionable
credentials.leaderboardComp
credentials.leaderboardComp.kills
credentials.leaderboardComp.deaths
credentials.leaderboardComp.bullets
credentials.leaderboardComp.kd
credentials.xpInfo
credentials.xpInfo.xp
credentials.joinDate
credentials.guest

*** MORE ADDED SOON ***

*/

/*
     -----------
     --- MOD ---
     -----------
*/

let bodyB = "assets/Tank Body.png", bodyBDark = "assets/darkMode/Tank Body.png", bodyR = "assets/Tank Body Red.png", bodyGrey = "assets/Tank Body Grey.png", titleTile = "assets/titleTile.png", backgroundDark = "assets/background dark.png", backgroundDarko = "assets/background dark_original.png", background = "assets/background.png", backgroundo = "assets/background_original.png", bullet = "assets/bullet.png", bulletDark = "assets/darkMode/bullet.png", bulletR = "assets/bullet red.png", bulletB = "assets/bullet blue.png", bulletBDark = "assets/darkMode/bullet blue.png", ctfFlagB = "assets/mode/ctf/blueFlag_tile.png", ctfFlagR = "assets/mode/ctf/redFlag_tile.png", crown = "assets/crown.png", crownA = "assets/crown arrow.png", bubbleR = "assets/bubbles/r.png", bubbleB = "assets/bubbles/b.png", cpBorder = "assets/mode/cp/border.png", arrow = "assets/mode/cp/arrow.png", arrowR = "assets/mode/cp/arrow r.png", arrowB = "assets/mode/cp/arrow b.png"; // assets... on one line! >:)
let UBTMver = '0.0.6'
let modName = ' Unofficial Blocktanks Mod.';
let modName0 = ' Unofficial Blocktanks Mod.';
let once1 = false;
let co1, co2;

async function delay() {
    try {
        if (!once1) {
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5000 milliseconds (5 seconds)
            console.log("Made by UnknownUser with a help of ChatGPT since I can't code advanced lines like in some JavaScript, HTML and CSS."/*\nBut I did create the arrow and border by myself in CP, I'm kinda new to digital art/Photoshop you might see some curves or other stuff, but try to ignore it okay?"*/);
            
            if (credentials.guest) {
                console.log('%cVERSION ' + UBTMver + ' || Welcome ' + credentials.username + ' to the' + modName0, 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                console.log('%cYou\'re logged in as a guest, Some of the UBTM features are unavailable','font-size:12px; color: #f00; font-weigth: bold;')
            } else if (credentials?.username == 'unknownuser') {
                console.log('%cVERSION ' + UBTMver +' || Welcome [Blocktanks Mod Creater] UnknownUser to the' + modName, 'font-size: 20px; color: #9d00ff; font-weight: bold;');
            } else if (credentials?.roles?.developer) {
                if (credentials?.vip) {
                    console.log('%cVERSION ' + UBTMver + ' || Welcome [VIP] [Developer]' + credentials.displayName + ' to' + modName + 'I hope you like my mod!', 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                } else if (!credentials?.vip) {
                    console.log('%cVERSION ' + UBTMver +' || Welcome [Developer] ' + credentials.displayName + ' to' + modName + 'I hope you like my mod!', 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                } else if (credentials?.username == 'kevdude') {
                    console.log('%cVERSION ' + UBTMver + ' || Welcome [Owner] KevDude to the' + modName + 'Lets hope you like this mod! :)', 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                } else {console.log("???")}
            } else if (credentials?.roles?.communityManager) {
                if (credentials?.vip) {
                    console.log('%cVERSION ' + UBTMver + ' || Welcome [VIP] [community Manager]' + credentials.displayName + ' to' + modName + 'I hope you like my mod!', 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                } else {
                    console.log('%cVERSION ' + UBTMver + ' || Welcome [Community Manager] ' + credentials.displayName + ' to' + modName + 'I hope you like my mod!', 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                }
            } else if (credentials?.roles?.moderator) {
                if (credentials?.vip) {
                    console.log('%cVERSION ' + UBTMver + ' || Welcome [VIP] [In-game Mods] ' + credentials.displayName + ' to the' + modName + 'I hope you like my mod!', 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                } else {
                    console.log('%cVERSION ' + UBTMver + ' || Welcome [In-game Mods] ' + credentials.displayName + ' to the' + modName + 'I hope you like my mod!', 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                }
            } else if (credentials?.vip) {
                console.log('%cVERSION ' + UBTMver + ' || Welcome [VIP] ' + credentials.displayName + ' to' + modName0, 'font-size: 20px; color: #9d00ff; font-weight: bold;');
            } else {
                if (credentials?.nameStatus?.shadowBan /* Deprecated? */ || credentials?.nameStatus?.questionable) {
                    console.log('%cQuestionable User detected, This mod may not work Based on you\'re account Status.', 'font-size: 18px; color: #f00; font-weight: bold;');
                } else {
                    console.log('%cVERSION ' + UBTMver + ' || Welcome ' + credentials.displayName + ' to' + modName0, 'font-size: 20px; color: #9d00ff; font-weight: bold;');
                }
            }
            
            console.warn('%c:: If you see another mod that looks like this and not by me, DO NOT DOWNLOAD/INSERT, It might be something Bad.', 'font-size: 18px; color: #fd3535; font-weight: bold;');
            
            if (credentials?.nameStatus?.shadowBan /* Deprecated? */ || credentials?.nameStatus?.questionable) {
                console.log('%cUser is Shadow Banned', 'font-size: 16px; color: #f00; font-weight: bold;')
            } else {
                console.log('%cUser is not Shadow Banned', 'font-size: 16px; color: #3f0; font-weight: bold;')
            }
            
            console.log('%cif the game is broken, refresh, If that doesnt work show me the errors/warns, Then I\'ll try and see if i can fix it.', 'font-size: 15px; color: darkgrey; font-weight: bold;');
            
            if (!credentials.guest) {
                console.log('%cTotal Kills: ' + credentials.leaderboardComp.kills, 'font-size: 14px; color: #f00; font-weight: bold;');
                console.log('%cTotal Deaths: ' + credentials.leaderboardComp.deaths, 'font-size: 14px; color: #ff479c; font-weight: bold;');
                console.log('%cTotal bullets shot: ' + credentials.leaderboardComp.bullets, 'font-size: 14px; color: grey; font-weight: bold;');
                console.log('%cJoined: ' + readableTimeStamp(credentials.joinDate), 'font-size: 14px; color: darkgreen; font-weight: bold;');
                console.log('%cTotal XP: ' + credentials.xpInfo.xp + ', If Floored: ' + Math.floor(credentials.xpInfo.xp), 'font-size: 14px; color: green; font-weight: bold;');
                console.log('%cTotal KD: ' + credentials.leaderboardComp.kd + ', If rounded: ' + Math.round(credentials.leaderboardComp.kd * 100) / 100, 'font-size: 14px; color: black; font-weight: bold;');
            } else {
                console.log('%cCan not get User stats, Logged in as a Guest', 'font-size: 15px; color: #f00; font-weight: bold;');
            }

            once1 = true;
        }
        
        setShadowColorTab();
        createThemeTab();
        
        console.log("Finished loading UBTM mod!");
    } catch (error) {
        console.error("Error:", error);
    }
}

function setShadowColorTab() {
    const missionTab = document.getElementById('accountTabs-missions');
    const eventsTab = document.getElementById('accountTabs-events');
    const bC = missionTab.style.backgroundColor;
    const eTSbC = getComputedStyle(eventsTab).backgroundColor;
    const x2 = bC.replace(/[^\d,]/g, '').split(',');
    const x3 = eTSbC.replace(/[^\d,]/g, '').split(',');
    
    // setting R, G, and B values
    for (let i = 0; i < x2.length; i++) {if (i == 0) {var r = x2[i];} else if (i == 1) {var g = x2[i];} else if (i == 2) {var b = x2[i];}}
    for (let i = 0; i < x3.length; i++) {if (i == 0) {var r2 = x3[i];} else if (i == 1) {var g2 = x3[i];} else if (i == 2) {var b2 = x3[i];}}
    
    let RGB = 'rgb('+(r-14)+','+(g-14)+','+(b-14)+')';
    let RGB2 = 'rgb('+(r-17)+','+(g-17)+','+(b-17)+')';
    let RGB3 = 'rgb('+(r2-14)+','+(g2-14)+','+(b2-14)+')';
    let RGB4 = 'rgb('+(r2-17)+','+(g2-17)+','+(b2-17)+')';
    let root = document.documentElement;
    let MST = 'drop-shadow(1px 1px 5px '+RGB+') drop-shadow(-1px -1px 10px '+RGB2+')';
    let MST2 = 'drop-shadow(1px 1px 5px '+RGB3+') drop-shadow(-1px -1px 10px '+RGB4+')';
    root.style.setProperty('--missions-selTab', MST);
    root.style.setProperty('--events-selTab', MST2);
    
    localStorage.setItem('UBTM-ver', UBTMver);
}

function createThemeTab() {
    const accountTabs = document.querySelector("#accountTabs > tbody > tr");
    const accountInfo = document.querySelector("#accountInfoContents");
    const themeTab = document.createElement("td");
    const themeInfo = document.createElement("div");
    themeTab.id = "accountTabs-themes";
    themeTab.setAttribute('onclick','loadAccountTab(\'themes\')');
    themeTab.setAttribute('class','unselectedTab');
    themeTab.class = "unselectedTab";
    themeTab.innerHTML = "Themes";
    themeInfo.id = "accountInfo-themes";
    themeInfo.style.display = "none";

    themeInfo.innerHTML = `
        <div class="accountInfoContent">
            <p>Presets:</p>
            <select id="themeSelect" onchange="theme(this.value)">
                <option value="default">Default</option>
                <option value="space">Space</option>
                <option value="smile">Smiles</option>
                <option value="custom">Custom</option>
            </select>
            <br></br>
            <p id="jsonLabel" style="display: none;>JSON:</p>
            <textarea id="jsonInput" name="jsonInput" autocomplete="off" spellcheck="false" placeholder="Enter JSON compatible theme..." style="height: 120px; width: 90%; display: none; padding: 10px; font-family: monospace; resize: vertical;"></textarea>
        </div>`;

    accountTabs.appendChild(themeTab);
    accountInfo.appendChild(themeInfo);

    document.getElementById("jsonInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            theme(this.value);
        }
    });
    
}

function theme(text) {
    const jsonInput = document.getElementById("jsonInput");
    const jsonLabel = document.getElementById("jsonLabel");

    if (text === "default") { // Brown
        co1 = 0xBF9067;
        co2 = 0x9E7149;
        jsonInput.style.display = "none";
        jsonLabel.style.display = "none";
    } else if (text === "space") { // Black and grey
        co1 = 0x000000;
        co2 = 0x1F1F1F;
        jsonInput.style.display = "none";
        jsonLabel.style.display = "none";
    } else if (text === "smile") { // Pink and yellow
        co1 = 0xF700FF;
        co2 = 0xFFEA00;
        jsonInput.style.display = "none";
        jsonLabel.style.display = "none";
    } else if (text === "custom") { // Custom
        jsonInput.style.display = "block";
        jsonLabel.style.display = "block";
    } else {
        try {
            const themeObject = JSON.parse(text);

            // Parse color values: hex string or number
            if (typeof themeObject.co1 === "string") {
                if (themeObject.co1.startsWith("#")) {
                    co1 = parseInt(themeObject.co1.replace("#", "0x"));
                } else if (themeObject.co1.startsWith("0x")) {
                    co1 = parseInt(themeObject.co1);
                } else {
                    alert("Invalid format for co1. Use '#rrggbb' or '0xrrggbb'.");
                    throw new Error("Invalid format for co1. Use '#rrggbb' or '0xrrggbb'.");
                }
            } else {
                co1 = themeObject.co1;
            }
            

            if (typeof themeObject.co2 === "string") {
                if (themeObject.co2.startsWith("#")) {
                    co2 = parseInt(themeObject.co2.replace("#", "0x"));
                } else if (themeObject.co2.startsWith("0x")) {
                    co2 = parseInt(themeObject.co2);
                } else {
                    alert("Invalid format for co1. Use '#rrggbb' or '0xrrggbb'.");
                    throw new Error("Invalid format for co2. Use '#rrggbb' or '0xrrggbb'.");
                }
            } else {
                co2 = themeObject.co2;
            }
            

            // Apply only if the field exists, otherwise use the default value.
            if (themeObject?.bodyB) bodyB = themeObject.bodyB; else bodyB = "assets/Tank Body.png";
            if (themeObject?.bodyBDark) bodyBDark = themeObject.bodyBDark; else bodyBDark = "assets/darkMode/Tank Body.png";
            if (themeObject?.bodyR) bodyR = themeObject.bodyR; else bodyR = "assets/Tank Body Red.png";
            if (themeObject?.bodyGrey) bodyGrey = themeObject.bodyGrey; else bodyGrey = "assets/Tank Body Grey.png";
            if (themeObject?.titleTile) titleTile = themeObject.titleTile; else titleTile = "assets/titleTile.png";
            if (themeObject?.backgroundDark) backgroundDark = themeObject.backgroundDark; else backgroundDark = "assets/background dark.png";
            if (themeObject?.backgroundDarko) backgroundDarko = themeObject.backgroundDarko; else backgroundDarko = "assets/background dark_original.png";
            if (themeObject?.background) background = themeObject.background; else background = "assets/background.png";
            if (themeObject?.backgroundo) backgroundo = themeObject.backgroundo; else backgroundo = "assets/background_original.png";
            if (themeObject?.bullet) bullet = themeObject.bullet; else bullet = "assets/bullet.png";
            if (themeObject?.bulletDark) bulletDark = themeObject.bulletDark; else bulletDark = "assets/darkMode/bullet.png";
            if (themeObject?.bulletR) bulletR = themeObject.bulletR; else bulletR = "assets/bullet red.png";
            if (themeObject?.bulletB) bulletB = themeObject.bulletB; else bulletB = "assets/bullet blue.png";
            if (themeObject?.bulletBDark) bulletBDark = themeObject.bulletBDark; else bulletBDark = "assets/darkMode/bullet blue.png";
            if (themeObject?.ctfFlagB) ctfFlagB = themeObject.ctfFlagB; else ctfFlagB = "assets/mode/ctf/blueFlag_tile.png";
            if (themeObject?.ctfFlagR) ctfFlagR = themeObject.ctfFlagR; else ctfFlagR = "assets/mode/ctf/redFlag_tile.png";
            if (themeObject?.crown) crown = themeObject.crown; else crown = "assets/crown.png";
            if (themeObject?.crownA) crownA = themeObject.crownA; else crownA = "assets/crown arrow.png";
            if (themeObject?.bubbleR) bubbleR = themeObject.bubbleR; else bubbleR = "assets/bubbles/r.png";
            if (themeObject?.bubbleB) bubbleB = themeObject.bubbleB; else bubbleB = "assets/bubbles/b.png";
            if (themeObject?.cpBorder) cpBorder = themeObject.cpBorder; else cpBorder = "assets/mode/cp/border.png";
            if (themeObject?.arrow) arrow = themeObject.arrow; else arrow = "assets/mode/cp/arrow.png";
            if (themeObject?.arrowR) arrowR = themeObject.arrowR; else arrowR = "assets/mode/cp/arrow r.png";
            if (themeObject?.arrowB) arrowB = themeObject.arrowB; else arrowB = "assets/mode/cp/arrow b.png";
            if (themeObject?.ctfArrow) arrow = themeObject.ctfArrow; else ctfArrow = "assets/mode/cp/arrow.png";
            if (themeObject?.ctfArrowB) arrowB = themeObject.ctfArrowB; else ctfArrowB = "assets/mode/cp/arrow b.png";
            if (themeObject?.ctfArrowR) arrowR = themeObject.ctfArrowR; else ctfArrowR = "assets/mode/cp/arrow r.png";

            console.log("\n\nTheme variables successfully loaded.\n\nTheme JSON Object:\n", themeObject, "\n\n", bodyB, bodyBDark, bodyR, bodyGrey, titleTile, backgroundDark, backgroundDarko, background, backgroundo, bullet, bulletDark, bulletR, bulletB, bulletBDark, ctfFlagB, ctfFlagR, crown, crownA, bubbleR, bubbleB, cpBorder, arrow, arrowR, arrowB);
            
            preload();
            lazyLoadGameResources();
        } catch (error) {
            console.error("Invalid JSON format:", error);
            alert("Invalid JSON format. Please check your input.");
        }
    }
}

/*
     -----------------
     --- OVERRIDES ---
     -----------------
*/

// Overriding the default showAccountInfo function
function loadAccountTab(id) {
    var c = ["events", "missions", "xp", "stats", "replays", "themes"]; // Added "themes" to the list of tabs
    for (var i = 0; i < c.length; i++) {
        try {
            document.getElementById("accountInfo-" + c[i]).style.display = "none";
            document.getElementById("accountTabs-" + c[i]).classList.remove("selectedTab");
            document.getElementById("accountTabs-" + c[i]).classList.add("unselectedTab");
        } catch (e) {
            console.debug("Error hiding tab " + c[i] + ": " + e.message);
        }
    }
    document.getElementById("accountInfo-" + id).style.display = "block";
    document.getElementById("accountTabs-" + id).classList.add("selectedTab");
    document.getElementById("accountTabs-" + id).classList.remove("unselectedTab");
}

// Overriding the default applyMapTint function
function applyMapTint(sprite, colorEnergy, seed = undefined) {
	const randomValue = (seed != undefined) ? seededRandom(seed) : Math.random();

	let randomBaseColor = interpolateHexColors(co1 ?? 0xbf9067, co2 ?? 0x9e7149, randomValue);
	if (colorEnergy > 0) { // Render blue tile
		sprite.tint = interpolateHexColors(0x345CD2, randomBaseColor, colorEnergy);
	}
	else { // Render red tile
		sprite.tint = interpolateHexColors(0xE72B2B, randomBaseColor, -colorEnergy);
	}
}

// Overriding the default preload function, Added values to game.load.image for dynamic changes
function preload() {
	console.log("PRELOAD FUNCTION STARTED");
    game.load.onLoadStart.add(function() { console.log("START LOAD - " + new Date().getTime()) });
	// game.load.onLoadComplete.addOnce(finishCreate, this);
	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	game.load.image('body b', bodyB);
	game.load.image('body_dark', bodyBDark);
	game.load.image("body r", bodyR);
	game.load.image("body grey", bodyGrey);


	game.load.image('arm/0', 'assets/items/arm/0.png');
	game.load.image('sticker/0', 'assets/items/sticker/0.png');
	game.load.image('decal/0', 'assets/items/decal/0.png');

	game.load.image("titleTile", titleTile);
	game.load.image("backgroundDark", backgroundDark);
	game.load.image('backgroundDark_original', backgroundDarko);
	game.load.image("background", background);
	game.load.image('background_original', backgroundo);
	game.time.advancedTiming = true;
}

// Overriding the default lazyLoadGameResources function, Added values to game.load.image for dynamic changes
function lazyLoadGameResources() {
    // game.load.onFileComplete.add(fileComplete, this);

	game.load.image("joystickInside", "assets/joystickInside.png");
	game.load.image("joystickOutside", "assets/joystickOutside.png");

	for (var i = 0; i < 6; i++) {
		game.load.image("explosion/0/n_dark/" + i, "assets/items/explosion/0/n/darkMode/" + i + ".png");
		game.load.image("explosion/0/n/" + i, "assets/items/explosion/0/n/" + i + ".png");
	}
	for (var i = 0; i < 6; i++) {
		game.load.image("explosion/0/r/" + i, "assets/items/explosion/0/r/" + i + ".png");
	}
	for (var i = 0; i < 6; i++) {
		game.load.image("explosion/0/b/" + i, "assets/items/explosion/0/b/" + i + ".png");
	}


	for (var i = 1; i <= 4; i++) {
		game.load.image("smoke" + i, "assets/smoke/" + i + ".png");
	}
	for (var i = 1; i <= 4; i++) {
		game.load.image("lightBurst" + i, "assets/lightBurst/" + i + ".png");
	}
	//Game Components
	game.load.image('bullet', bullet);
	game.load.image('bullet_dark', bulletDark);
	game.load.image('bullet r', bulletR);
	game.load.image("bullet b", bulletB);
	game.load.image("bullet b_dark", bulletBDark);

	game.load.image("bomb r_spooky", "assets/spooky/bomb r.png");
	game.load.image("bomb b_spooky", "assets/spooky/bomb b.png");
	game.load.image("bomb_spooky", "assets/spooky/bomb.png");
	game.load.image("skull_dark", "assets/spooky/skull.png");

	game.load.image("fullscreen", "assets/Fullscreen.png");

	// Map Tiles
	game.load.image("mapTile", "assets/mapTile.png");
	game.load.image("mapTileSet", "assets/mapTileSet.png");
	game.load.image("mapTile Blue", "assets/mapTile Blue.png");
	game.load.image("mapTile Red", "assets/mapTile Red.png");
	game.load.image("mapTile Blue Pale", "assets/mapTile Blue Pale.png");
	game.load.image("mapTile Red Pale", "assets/mapTile Red Pale.png");
	game.load.image("bulletOnlyTile", "assets/bulletOnlyTile.png");
	game.load.image("ice", "assets/ice.png");
	game.load.spritesheet("iceSparkles", "assets/iceSparkles.png", 25, 25);
	game.load.image("bounce", "assets/bounce.png");

	var mapSizes = [10, 11, 15, 20, 24, 25, 30, 31, 32, 33, 35, 40, 50, 51, 55];
	for (var i = 0; i < mapSizes.length; i++) {
		game.load.spritesheet('mapTile' + mapSizes[i], 'assets/tileColors' + mapSizes[i] + '.png', 1, 1, mapSizes[i]);
	}

	game.load.spritesheet("mapTile40_40", "assets/tileColors40_40.png", 1, 1);

	game.load.spritesheet("mapTile48_48", "assets/tileColors48_48.png", 1, 1);

	game.load.spritesheet("mapTile15_15", "assets/tileColors15_15.png", 1, 1);

	//Powerups

	for (var i = 0; i < weaponsList.length; i++) {
		if (i != 0) {
			game.load.image(weaponsList[i] + "_dark", "assets/powerups/darkMode/" + weaponsList[i] + ".png");
			game.load.image(weaponsList[i], "assets/powerups/" + weaponsList[i] + ".png");
		}
	}




	var projectiles = ["rocket", "flashbang", "grenade", "volcano", "bottlebomb"];
	for (var i = 0; i < projectiles.length; i++) {
		var p = projectiles[i];
		game.load.image(p + 'Bullet', "assets/" + p + ".png");
		game.load.image(p + 'Bullet_dark', "assets/darkMode/" + p + ".png");
		game.load.image(p + 'Bullet r', "assets/" + p + " r.png");
		game.load.image(p + "Bullet b", "assets/" + p + " b.png")
		game.load.image(p + "Bullet b_dark", "assets/darkMode/" + p + " b.png")
	}

	game.load.image("sniperAim", "assets/sniper/aim.png");

	game.load.spritesheet("sniperShoot_r", "assets/sniper/shoot_r.png", 20, 20, 5);
	game.load.spritesheet("sniperShoot_b", "assets/sniper/shoot_b.png", 20, 20, 5);

	game.load.image("crown", crown);

	game.load.image("crown arrow", crownA);

	game.load.image("bubble r_0", bubbleR);
	game.load.image("bubble b_0", bubbleB);


	game.load.image("cp_border", cpBorder);

	game.load.image("cp_arrow", arrow);

	game.load.image("cp_arrow r", arrowR);

	game.load.image("cp_arrow b", arrowB);

	game.load.image('ctf_flag b', ctfFlagB);
	game.load.image('ctf_flag r', ctfFlagR);

	game.load.image('ctf_arrow', arrow);
	game.load.image('ctf_arrow b', arrowB);
	game.load.image('ctf_arrow r', arrowR);

	game.load.image('ctf_highlight b', '/assets/Tank Body.png');
	game.load.image('ctf_highlight r', '/assets/Tank Body Red.png');

	if (CHRISTMAS_TIME) {
		game.load.image("christmas/presents/b/0", "assets/christmas/presents/b/0.png");
		game.load.image("christmas/presents/r/0", "assets/christmas/presents/r/0.png");
		game.load.image("c_lights", "assets/christmas/lights.png");
		for (var i = 0; i <= 5; i++) {
			game.load.image("snowflake_" + i, "assets/christmas/snow/" + i + ".png");
		}
	}
	if (window.missions && !FLAGS.collectablesLoaded) {
		FLAGS.collectablesLoaded = true;
		console.log("LOADING COLLECTABLES FROM PRELOAD FUNCTION");
		loadCollectables();
	}


	var soundKeys = "bullet1 bullet2 bullet3 explode explodeShort weapon sad sad2 beep beep2 zap flash happy jingle jingle2 spawn slide".split(" ");
	for (var i = 0; i < soundKeys.length; i++) {
		var key = soundKeys[i];
		game.load.audio(key, "sounds/" + key + ".mp3");
		SOUNDS[key] = new Phaser.Sound(game, key, 1);
	}
	SOUNDS.weapon.volume = 0.35;

	SOUNDS.streaks = {
		3: ["jingle_streak3", "Triple Kill!"],
		5: ["jingle_carnage", "Total Carnage!!"],
		10: ["jingle_unstoppable", "Unstoppable!!!"],
		15: ["jingle_insanity", "Insanity!!!!"],
		20: ["jingle_stop", "Maybe you should stop now..."],
		25: ["jingle_takeabreak", "Seriously! Take a break or something."]
	};

	for (var i in SOUNDS.streaks) {
		game.load.audio(SOUNDS.streaks[i][0], "sounds/jingles/" + SOUNDS.streaks[i][0] + ".mp3");
		SOUNDS[SOUNDS.streaks[i][0]] = new Phaser.Sound(game, SOUNDS.streaks[i][0], .25);
	}
	game.load.start();
}