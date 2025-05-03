### This is where I keep my Blocktanks mods in

Each folder will have a video and/or instructions.txt for installation

If you have an issue with one of these mods
Please open a new issue in the Issues tab, With errors/warns and mod name provided for easier debugging

> The ModLoader is WIP and will not work yet, When the loader is released then the mods listed here will require it. (For better accessibility?)
### ModLoader is put on hold!

## lightMode-UBTM
The UBTM mod does not require anything, This goes for visuals, If you like the classic/cartoony style then don't use this.

UBTM gives you shadows, gradients, some animated buttons/weapons, and text decorations.

includes custom JSON format for replacing blocktanks assests (No specific order):

```json
{
  "co1": "HEX color (0x or #)",
  "co2": "HEX color (0x or #)",
  "arrow": "URL",
  "arrowB": "URL",
  "arrowR": "URL",
  "background": "URL",
  "backgroundDark": "URL",
  "backgroundDarko": "URL",
  "backgroundo": "URL",
  "bodyB": "URL",
  "bodyBDark": "URL",
  "bodyGrey": "URL",
  "bodyR": "URL",
  "bubbleB": "URL",
  "bubbleR": "URL",
  "bullet": "URL",
  "bulletB": "URL",
  "bulletBDark": "URL",
  "bulletDark": "URL",
  "bulletR": "URL",
  "cpBorder": "URL",
  "crown": "URL",
  "crownA": "URL",
  "ctfFlagB": "URL",
  "ctfFlagR": "URL",
  "titleTile": "URL"
}
```

In order to access this you must select custom on the drop menu in the `Themes` tab, the drop menu also contains space and smiles which only puts color/tint on the map instead of the brown.

co1 and co2 are for map coloring/tinting
o = original (A bit more saturated, like a bit yellowish. Or just the classic)
B = Blue
R = Red
cp = Payload

The Arrows are the Red, Blue, and grey arrows that you see,
The background is just the grid,
crowns are crown and crownA (crownA is a yellow arrow, not sure what it was used for),
titleTile is the map for the title screen (home screen/main screen).

Unfortantaly you can only input non-CORS images (Or sites that allow anonymous as the request header), for now.

More things to replace is coming soon

You can suggest something in the issues or discussions tab! :)

---
## Join-Alert
This outputs to the chat ( e.g.: [USERNAME] has joined/Left ).

This does now support guests.

The joining/leaving message only shows to you.

~300 ms delay (Or after the tank is gone/appeared)
```js
const delay1 = 750; // At line 5
```
---
