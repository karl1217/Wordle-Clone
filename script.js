//lock the textboxes once guess has been entered
const body = document.body;
const textBox = document.querySelectorAll(".text-box");
const key = document.querySelectorAll(".key");
const answer = document.querySelectorAll(".answer");

//Functions and variables
let allGuesses = []; //2D array
let currentGuess = [];
let currentTextBox = 0;


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
    textBox.innerText = letter;
    currentTextBox++;
    return;
}

function deleteLetterFromScreen(textBox) {
    if (currentTextBox > 0) {
        currentTextBox--;
    }
    textBox.innerText = "";
    return;
}


makeKeyGreen(key[0]);
makeKeyGrey(key[1]);
makeBoxGreen(textBox[0]);
makeBoxGrey(textBox[1]);
makeBoxYellow(textBox[2]);



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

//ENTER BUTTON

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
    deleteLetterFromScreen(textBox[currentTextBox]);
});





