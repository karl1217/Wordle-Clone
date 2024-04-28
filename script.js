//lock the textboxes once guess has been entered
const body = document.body;
const textBox = document.querySelectorAll(".text-box");
const key = document.querySelectorAll(".key");
const answer = document.querySelectorAll(".answer");

//Functions and variables
let allGuesses = []; //2D array
let currentGuess = [];


//Box colors
function makeBoxGreen(textBox) {
    textBox.style.setProperty('background-color', 'rgb(76, 173, 76)');
    textBox.style.setProperty('color', 'white');
}

function makeBoxGrey(textBox) {
    textBox.style.setProperty('background-color', 'grey');
    textBox.style.setProperty('color', 'white');
}

function makeBoxYellow(textBox) {
    textBox.style.setProperty('background-color', 'rgb(207, 188, 39)');
    textBox.style.setProperty('color', 'white');
}


//Keyboard colors
function makeKeyGreen(key) {
    key.style.setProperty('background-color', 'rgb(76, 173, 76)');
    key.style.setProperty('color', 'white');
}

function makeKeyGrey(key) {
    key.style.setProperty('background-color', 'grey');
    key.style.setProperty('color', 'white');
}


//Writing text to screen
function addLetterToScreen(letter) {
    textBox.innerText = letter;
    currentGuess.append(letter);
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



makeKeyGreen(key[0]);
makeKeyGrey(key[1]);
makeBoxGreen(textBox[0]);
makeBoxGrey(textBox[1]);
makeBoxYellow(textBox[2]);

//Add click event buttons for each key
q.addEventListener("click", () => {
    addLetterToScreen(boxOne, "q", boxTwo);
})
