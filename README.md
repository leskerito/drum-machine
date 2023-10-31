# DRUM-MACHINE

---

## What is this?

This project is a react-made drum-machine. Allowing you to make some sick beats in one of the **_ugliest_** drum machines ever. This project was made as part of the [fCC Course on front end development](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine).

## What do I need for this?

- Latest version of **NodeJS**
- Some creativity
- Rhythm

## How do I use this? 

After cloning the repo in the directory of your choice, I recommend launching `npm install` to make sure you install all the necessary dependencies before starting. Then, just enter `npm start` to start a local server on port 3000. You can then access the project from `http://localhost:3000/`.

### How to play?

The drum-machine functions by either pressing one of the **"`QWEASDZXC`"** keys or clicking on the respective drum-pads. 
Every time you press the drum-pad, a sound will be played using the HTML5 `<audio>` tag. This sound will play until you either press that key again, or it finishes. 

There are two additional buttons **`Volume`** and **`Bank`** which allow you to mute the drum machine, or change its sound bank respectively 

*Note: The bank switching feature, while functional, doesn't have any additional sound at the moment as the programmer, which shall remain unnamed, was lazy.*

## How was it made?

#### Technologies used
* React 18
* #### SASS

The base if the app is a `DrumMachine.js` component that houses 9 `DrumPad.js` components (glorified buttons) as well as two `Switch.js` components (literally the same thing) and a div displaying which Pad was pressed. 

The different sounds are housed in a `padSounds.js`, where different objects corresponding to the different sound banks, are exported.

##### Drum Machine
Three states: 

* `padPlayed`, a `String`, displaying the pad just played.
* `whichBank`, a `Number` remembering which sound bank is being used.
* `isPlaying`, a `Boolean` deciding if volume comes out or not.

Four handlers:

* `handleDisplay` which shows up the Pad Played on screen.
* `handleBank` which changes the number variable of the sound bank in use. 
* `handleVolume` which changes the boolean regarding the mute.
* `handlePress` which handles the event in which the user presses a key on their keyboard.

#### Drum Pads
One handler: 

* `handleclick` which handles the click on one of the drum pads.

Three props: 

* `name` which will define which key to press to activate the pad as well as the pad's id.
* `handleDisplay`, the parent's handler passed here.
* `soundBank` to define with the pads the sounds they'll use.

The component returns a `<button>` element with a nested `<audio>` element which plays the sound on a click or a press.

#### Switch

Two props: 

*`name` which decides the id of the button. 
*`handleSwitch` which will be on of the two handlers defined in the parent to act on the Drum Machine.

The component returns a `<div>` element with a nested `<button>` calling handleSwitch on click.


## Known Bugs

Haven't really found a breaking bug however, the tests of the fCC tool pass while also bringing up the *`The play() request was interrupted by a call to pause()`* error. 

Also, if you play the keys extremely fast, like 10 repetitions of the same pad a second kinda fast, this might happen as well. 
