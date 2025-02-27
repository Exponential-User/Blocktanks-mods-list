/* 

Roles:

credentials.roles
credentials.roles.communityManager
credentials.roles.esports
credentials.roles.moderator
credentials.roles.superModHelper
credentials.roles.developer

-----------------------------------

used creds:

credentials.roles
credentials.verified
credentials.id
credentials.username
credentials.displayname
credentials.nameStatus
credentials.nameStatus.shadowBan
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

// Mod
async function delay() {
    try {
        if (!once1) {
            console.debug("TEST :: Start");
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5000 milliseconds (5 seconds)
            console.debug("TEST :: End after delay");
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
                console.log('%cTotal KD: ' + credentials.leaderboardComp.kd + ', If rounded: ' + Math.round(credentials.leaderboardComp.kd * 100) / 100, 'font-size: 14px; color: white; font-weight: bold;');
            } else {
                console.log('%cCan not get User stats, Logged in as a Guest', 'font-size: 15px; color: #f00; font-weight: bold;');
            }

            once1 = true;
        }
        
        setShadowColorTab();
        
        console.log("Finished loading UBTM mod!");
    } catch (error) {
        console.error("Error:", error);
    }
}

function setShadowColorTab() {
    const missionTab = document.getElementById('accountTabs-missions');
    const missionTabStyle = missionTab.style;
    const bC = missionTabStyle.backgroundColor;
    const x2 = bC.replace(/[^\d,]/g, '').split(','); // first time using Regex :)
    
    // setting R, G, and B values
    for (let index = 0; index < x2.length; index++) {if (index == 0) {var r = x2[index];} else if (index == 1) {var g = x2[index];} else if (index == 2) {var b = x2[index];}}
    
    let r2 = r - 10;
    let g2 = g - 10;
    let b2 = b - 10;
    
    let RGB = 'rgb('+r2+','+g2+','+b2+')'
    let RGB2 = 'rgb('+(r2-3)+','+(g2-3)+','+(b2-3)+')'
    let root = document.documentElement;
    // let currColor = getComputedStyle(root).getPropertyValue('--missions-selTab');
    let MST = 'drop-shadow(1px 1px 5px '+RGB+') drop-shadow(-1px -1px 10px '+RGB2+')';
    root.style.setProperty('--missions-selTab', MST);
    
    localStorage.setItem('UBTM-ver', UBTMver);
}