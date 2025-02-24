import { ver } from "lightMode-UBTM/blocktanks.net/js/ui.js";

function Init1() {
    const versions = {
        "ModLoader":"0.0.1",
        "UBTM-LM":"0.0.6"
    };
    
    const getGameInfo = (m,i) => {
        console.debug(
            "Getting game info...",
            
            "\n\n",
            "   Mod requesting: ", m,
            
            "\n\n",
            "   Input: ", i
        );
        
        try {
            if (i == "versionCheck") {
                let vCK = ver == versions[m]
                console.debug("Conforming to ModLoader version: ", vCK);
                if (vCK) {
                    return true;
                }
            } //else if () {

            //}
            /*
                EXLUDE KEYS, THIS IS A SECURITY MEASURE! (only if there are other mods using this, e.g., mods that were not created by me)
                Don't access these keys, they are exluded for the users safety.
            */
            const excludeKeys = ["password", "email", "verificationToken", "verificationTokenExpires", "resetPasswordToken", "resetPasswordExpires", "accountHistory"];
            Object.entries(credentials).forEach(([key, value]) => {
                if (!excludeKeys.includes(key)) {
                    console.log("\nKey: ", key, "\nValue: ", value);

                    let storedData = localStorage.getItem('avaliableCredentials') || '{}';
                    
                    storedData = JSON.parse(storedData);
                    storedData[key] = value;
                    localStorage.setItem('avaliableCredentials', JSON.stringify(storedData));
                } else {
                    console.debug(`UNAUTHORIZED KEY ACCESS - ${key}`);
                }
            });
        } catch (e) {
            console.error("Can not find credentials.\nError: ", e);
        }

        try {
            console.debug("Conforming to lightMode-UBTM version: ", (ver == versions["UBTM-LM"]));
        } catch (e) {
            console.log("Cant get lightMode-UBTM version, Did you placed UBTM in BTModLoader?.\nError: ", e);
        }
    }

    const getHTML = () => {
        // unused
        return "Warning: Unused function, No HTML sent."
    }
}

export { Init1 };