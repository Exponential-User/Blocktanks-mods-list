### This is where I keep my Blocktanks mods in

Each folder will have a video and/or instructions.txt for installation

If you have an issue with one of these mods
Please open a new issue in the Issues tab, With errors/warns and mod name provided for easier debugging

## lightMode-UBTM
The UBTM mod does not require anything, This goes for visuals, If you like the classic/cartoony style then don't use this.

UBTM gives you shadows, gradients, some animated buttons/weapons, and text decorations.

includes custom JSON format for replacing blocktanks assests (No specific order, required to remove any unused value and no comma at the end):

```json
{
  "co1": "HEX color (0x or #)",
  "co2": "HEX color (0x or #)",
  "arrow": "assets/custom/FILENAME",
  "arrowB": "assets/custom/FILENAME",
  "arrowR": "assets/custom/FILENAME",
  "background": "assets/custom/FILENAME",
  "backgroundDark": "assets/custom/FILENAME",
  "backgroundDarko": "assets/custom/FILENAME",
  "backgroundo": "assets/custom/FILENAME",
  "bodyB": "assets/custom/FILENAME",
  "bodyBDark": "assets/custom/FILENAME",
  "bodyGrey": "assets/custom/FILENAME",
  "bodyR": "assets/custom/FILENAME",
  "bubbleB": "assets/custom/FILENAME",
  "bubbleR": "assets/custom/FILENAME",
  "bullet": "assets/custom/FILENAME",
  "bulletB": "assets/custom/FILENAME",
  "bulletBDark": "assets/custom/FILENAME",
  "bulletDark": "assets/custom/FILENAME",
  "bulletR": "assets/custom/FILENAME",
  "cpBorder": "assets/custom/FILENAME",
  "crown": "assets/custom/FILENAME",
  "crownA": "assets/custom/FILENAME",
  "ctfFlagB": "assets/custom/FILENAME",
  "ctfFlagR": "assets/custom/FILENAME",
  "titleTile": "assets/custom/FILENAME"
}
```

In order to access this you must select custom on the drop menu in the `Themes` tab, the drop menu also contains space and smiles which only puts color/tint on the map instead of the brown.

The text box is resizable, click and drag on the bottom-right corner in order to resize the text box.

co1 and co2 are for map coloring/tinting

shortword dictionary (Only at ends of the value):
> o = original

> B = Blue

> R = Red

> cp = Payload (This is at the start of a value)

The Arrows are the Red, Blue, and grey arrows that you see,
The background is just the grid,
crowns are crown and crownA (crownA is a yellow arrow, not sure what it was used for),
titleTile is the map for the title screen (home screen/main screen).

You can only input images you downloaded in the custom folder. file path: `lightMode-UBTM\blocktanks.net\assets\custom`

There is a text file called usage in the file path, It is recommended to read it.

More things to replace is coming soon

If assets disappear from the title screen (home screen/main screen) after pressing enter, they will come back after you played a match.

It will not save once you refreshed or go to any community page (clans, user, ...), Make sure to save your JSON in a file or notes.

You can suggest something in the issues or discussions tab! :)

---
## Join-Alert
This can work with other mods

This outputs to the chat ( e.g.: [Join-Alert] USERNAME has joined the match ).

This does now support guests.

The joining/leaving message only shows to you.

~300 ms delay (Or after the tank is gone/appeared)
```js
const delay1 = 750; // At line 5
```
---
## ThemeAssetReplacer
Has the same functions as lightMode-UBTM but without the modified CSS files (normal visuals)

It will not save once you refreshed or go to any community page (clans, user, ...), Make sure to save your JSON in a file or notes.

file path: `ThemeAssetReplacer\blocktanks.net\assets\custom`

There is a text file called usage in the file path, It is recommended to read it.
