//lock the textboxes once guess has been entered
const body = document.body;
const textBox = document.querySelectorAll(".text-box");
const key = document.querySelectorAll(".key");
const winMessage = document.querySelector(".win-message");
document.body.style.fontFamily = 'Franklin Gothic Medium';

//Add random word bank
let wordBank = ["adobo", "sisig", "pizza", "mango", "mochi", "sushi", "kebab", "pasta"];

//Word bank
let answer = [];
let answerCopy = [0,0,0,0,0];

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
function addLetterToScreen(textBox, letter) {
    if ((!(numOfLetters == 5)) && !disableKeyboard) {
        textBox.innerText = letter;
        currentTextBox++;
        numOfLetters++;
        currentGuess.push(letter);
    }
    return;
}

function deleteLetterFromScreen(textBox) {
    if ((currentTextBox > 0) && !disableKeyboard) {
        if (numOfLetters != 0) {
            textBox.innerText = "";
            currentTextBox--;
            numOfLetters--;
            currentGuess.pop();
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

//Guess checking function
function validateGuess(currentGuess, answer) {
    answerCopy = copyArray(answerCopy, answer);
    for (let i = 0; i < 5; i++) {
        if (currentGuess[i] == answerCopy[i]) {
            makeBoxGreen(textBox[textBoxEvaluating]);
            answerCopy[i] = 1;
            correctLetters++;
        }
        textBoxEvaluating++;
    }
    textBoxEvaluating-=5;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (currentGuess[i] == answerCopy[j]) {
                makeBoxYellow(textBox[textBoxEvaluating]);
                answerCopy[j] = 0;
                break;
            } else if (answerCopy[i] != 1) {
                makeBoxGrey(textBox[textBoxEvaluating]);
            }       
        }
        textBoxEvaluating++;
    }
}



//Add click event buttons for each key
key[0].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "Q");
});

key[1].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "W");
});

key[2].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "E");
});

key[3].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "R");
});

key[4].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "T");
});

key[5].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "Y");
});

key[6].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "U");
});

key[7].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "I");
});

key[8].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "O");
});

key[9].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "P");
});


key[10].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "A");
});

key[11].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "S");
});

key[12].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "D");
});

key[13].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "F");
});

key[14].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "G");
});


key[15].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "H");
});

key[16].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "J");
});

key[17].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "K");
});

key[18].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "L");
});

key[20].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "Z");
});

key[21].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "X");
});

key[22].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "C");
});

key[23].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "V");
});

key[24].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "B");
});


key[25].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "N");
});

key[26].addEventListener("click", () => {
    addLetterToScreen(textBox[currentTextBox], "M");
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