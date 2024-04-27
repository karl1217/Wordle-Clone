//lock the textboxes once guess has been entered
const body = document.body;

document.getElementById("first-box").focus();

//Keyboard keys
const q = document.querySelector("#q");
const w = document.querySelector("#w");
const e = document.querySelector("#e");
const r = document.querySelector("#r");
const t = document.querySelector("#t");
const y = document.querySelector("#y");
const u = document.querySelector("#u");
const i = document.querySelector("#i");
const o = document.querySelector("#o");
const p = document.querySelector("#p");
const a = document.querySelector("#a");
const s = document.querySelector("#s");
const d = document.querySelector("#d");
const f = document.querySelector("#f");
const g = document.querySelector("#g");
const h = document.querySelector("#h");
const j = document.querySelector("#j");
const k = document.querySelector("#k");
const l = document.querySelector("#l");
const z = document.querySelector("#z");
const x = document.querySelector("#x");
const c = document.querySelector("#c");
const v = document.querySelector("#v");
const b = document.querySelector("#b");
const n = document.querySelector("#n");
const m = document.querySelector("#m");
const enter = document.querySelector("#enter");
const del = document.querySelector("#delete");

//Text boxes
const boxOne = document.querySelector("#box-one");
const boxTwo = document.querySelector("#box-two");
const boxThree = document.querySelector("#box-three");
const boxFour = document.querySelector("#box-four");
const boxFive = document.querySelector("#box-five");
const boxSix = document.querySelector("#box-six");
const boxSeven = document.querySelector("#box-seven");
const boxEight = document.querySelector("#box-eight");
const boxNine = document.querySelector("#box-nine");
const boxTen = document.querySelector("#box-ten");
const boxEleven = document.querySelector("#box-eleven");
const boxTwelve = document.querySelector("#box-twelve");
const boxThirteen = document.querySelector("#box-thirteen");
const boxFourteen = document.querySelector("#box-fourteen");
const boxFifteen = document.querySelector("#box-fifteen");
const boxSixteen = document.querySelector("#box-sixteen");
const boxSeventeen = document.querySelector("#box-seventeen");
const boxEighteen = document.querySelector("#box-eighteen");
const boxNineteen = document.querySelector("#box-nineteen");
const boxTwenty = document.querySelector("#box-twenty");
const boxTwentyOne = document.querySelector("#box-twenty-one");
const boxTwentyTwo = document.querySelector("#box-twenty-two");
const boxTwentyThree = document.querySelector("#box-twenty-three");
const boxTwentyFour = document.querySelector("#box-twenty-four");
const boxTwentyFive = document.querySelector("#box-twenty-five");
const boxTwentySix = document.querySelector("#box-twenty-six");
const boxTwentySeven = document.querySelector("#box-twenty-seven");
const boxTwentyEight = document.querySelector("#box-twenty-eight");
const boxTwentyNine = document.querySelector("#box-twenty-nine");
const boxThirty = document.querySelector("#box-thirty");




//Functions and variables
let allGuesses = []; //2D array
let currentGuess = [];


//Writing text to screen functions
function addLetterToScreen(textBox, letter, nextTextBox) {
    textBox.innerText = letter;
    currentGuess.append(letter);
    document.getElementById(nextTextBox).focus();
    return;
}

function deleteLetterFromScreen(textBox, nextTextBox) {
    textBox.innerText = "";
    currentGuess.pop(letter);
    document.getElementById(nextTextBox).focus();
    return;
}

function enterGuess(nextTextBox) {
    allGuesses.append(currentGuess);
    document.getElementById(nextTextBox).focus();
}


//Keyboard color change functions
function makeKeyGreen(key) {
    key.style.setProperty('background-color', 'green');
    key.style.setProperty('color', 'white');
}

function makeKeyGrey(key) {
    key.style.setProperty('background-color', 'grey');
    key.style.setProperty('color', 'white');
}

//Screen color change functions
function makeBoxGreen(textBox) {
    key.style.setProperty('background-color', 'green');
    key.style.setProperty('color', 'white');
}
