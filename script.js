//lock the textboxes once guess has been entered
const body = document.body;
const textBox = document.querySelectorAll(".text-box");
const key = document.querySelectorAll(".key");
const winMessage = document.querySelector(".win-message");
document.body.style.fontFamily = 'Franklin Gothic Medium';

//Add random word bank
let wordBank = [
    "apple", "grape", "house", "table", "plane", "stone", "water", "party", "music", "brick",
    "light", "dance", "plant", "piano", "beach", "sword", "charm", "glove", "sweet", "flame",
    "laugh", "peace", "crowd", "watch", "clean", "climb", "dream", "bloom", "brick", "swear"
  ];

//Word bank
let answer = [];
let answerCopy = [0,0,0,0,0];
let keysPressed = [];
let correctKeys =[];
let incorrectKeys = [];

//Functions and variables
let currentGuess = [];

let currentTextBox = 0;
let numOfLetters = 0;
let textBoxEvaluating = 0;
let correctLetters = 0;

let disableKeyboard = false;

//Random word array
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
for (let i = 0; i < 5; i++) {
    answer.push(word[i].toUpperCase());
}

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
function addLetterToScreen(textBox, letter, keyNum) {
    if ((!(numOfLetters == 5)) && !disableKeyboard) {
        textBox.innerText = letter;
        currentTextBox++;
        numOfLetters++;
        currentGuess.push(letter);
        keysPressed.push(keyNum);
    }
    return;
}

function deleteLetterFromScreen(textBox, keyNum) {
    if ((currentTextBox > 0) && !disableKeyboard) {
        if (numOfLetters != 0) {
            textBox.innerText = "";
            currentTextBox--;
            numOfLetters--;
            currentGuess.pop();
            keysPressed.pop();
        }
    }
    return;
}


function copyArray(array, arrayToCopy) {
    for (let i = 0; i < 5; i++) {
        array[i] = arrayToCopy[i];
    }
    return array;
}

function updateGreenKeyColors() {
    for (let i = 0; i < correctKeys.length; i++) {
        makeKeyGreen(key[correctKeys[i]]);

    }
    return;
}

function updateGreyKeyColors() {
    for (let i = 0; i < incorrectKeys.length; i++) {
        makeKeyGrey(key[incorrectKeys[i]]);

    }
    return;
}

//Guess checking function
function validateGuess(currentGuess, answer) {
    answerCopy = copyArray(answerCopy, answer);
    for (let i = 0; i < 5; i++) {
        if (currentGuess[i] == answerCopy[i]) {
            makeBoxGreen(textBox[textBoxEvaluating]);
            if (!(keysPressed[i] in correctKeys)) {
                correctKeys.push(keysPressed[i]);
            }
            answerCopy[i] = 1;
            correctLetters++;
        }
        textBoxEvaluating++;
    }
    textBoxEvaluating-=5;
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (answerCopy[i] != 1) {
                if (currentGuess[i] == answerCopy[j]) {
                    makeBoxYellow(textBox[textBoxEvaluating]);
                    if (!(keysPressed[i] in correctKeys)) {
                        correctKeys.push(keysPressed[i]);
                    }
                    answerCopy[j] = 0;
                    break;
                } else if (answerCopy[i] != 1) {
                    makeBoxGrey(textBox[textBoxEvaluating]);
                    incorrectKeys.push(keysPressed[i]);                   
                }       
            }
        }
        textBoxEvaluating++;
    }
    updateGreyKeyColors();
    updateGreenKeyColors();
    keysPressed = [];
}

//Add click event buttons for each key
key[0].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "Q", 0);
});

key[1].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "W", 1);
});

key[2].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "E", 2);
});

key[3].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "R", 3);
});

key[4].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "T", 4);
});

key[5].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "Y", 5);
});

key[6].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "U", 6);
});

key[7].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "I", 7);
});

key[8].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "O", 8);
});

key[9].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "P", 9);
});


key[10].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "A", 10);
});

key[11].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "S", 11);
});

key[12].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "D", 12);
});

key[13].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "F", 13);
});

key[14].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "G", 14);
});


key[15].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "H", 15);
});

key[16].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "J", 16);
});

key[17].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "K", 17);
});

key[18].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "L", 18);
});

key[20].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "Z", 20);
});

key[21].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "X", 21);
});

key[22].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "C", 22);
});

key[23].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "V", 23);
});

key[24].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "B", 24);
});


key[25].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "N", 25);
});

key[26].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "M", 26);
});

key[27].addEventListener("click", () => {
    deleteLetterFromScreen(textBox[currentTextBox - 1]);
});

//ENTER BUTTON
key[19].addEventListener("click", () => {
    if (numOfLetters == 5) { 
        validateGuess(currentGuess, answer);
        numOfLetters = 0;
        currentGuess = [];
        if (correctLetters == 5) {
            disableKeyboard = true;
            winMessage.style.setProperty("width", "100px");
            winMessage.style.setProperty("height", "45px");
        } else {
            correctLetters = 0;
        }
    }
});