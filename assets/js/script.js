const texts = {
    easy: [
        "The cat sat on the mat.",
        "The quick brown fox jumps over the lazy dog.",
        "She sells seashells by the seashore."
    ],
    medium: [
        "To be or not to be, that is the question.",
        "All that glitters is not gold.",
        "A journey of a thousand miles begins with a single step."
    ],
    hard: [
        "It was the best of times, it was the worst of times.",
        "In the beginning God created the heavens and the earth.",
        "The only thing we have to fear is fear itself."
    ]
};

document.getElementById('difficulty').addEventListener('change', function() {
    const difficulty = this.value;
    const sampleTextDiv = document.getElementById('sample-text');
    const randomText = texts[difficulty][Math.floor(Math.random() * texts[difficulty].length)];
    sampleTextDiv.textContent = randomText;
});

// Get references to the DOM elements
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const retryButton = document.getElementById('retry-btn');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');

let startTime, endTime;

// Function to start the typing test
function startTest() {
    startTime = new Date();
    startButton.disabled = true;
    stopButton.disabled = false;
    userInput.disabled = false;
    userInput.focus();
}

// Function to stop the typing test
function stopTest() {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    timeDisplay.textContent = timeTaken.toFixed(2); // Display time rounded to two decimal points

    const sampleText = document.getElementById('sample-text').textContent;
    const userText = userInput.value.trim();
    const correctWords = countCorrectWords(sampleText, userText);
    const wpm = calculateWPM(correctWords, timeTaken);
    document.getElementById('wpm').textContent = wpm;

    const difficulty = document.getElementById('difficulty').value;
    document.getElementById('level').textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    startButton.disabled = false;
    stopButton.disabled = true;
    userInput.disabled = true;
}

// Function to reset the typing test
function resetTest() {
    userInput.value = '';
    timeDisplay.textContent = '0';
    document.getElementById('wpm').textContent = '0';
    startButton.disabled = false;
    stopButton.disabled = true;
    userInput.disabled = true;
}

// Function to count the number of correct words
function countCorrectWords(sampleText, userText) {
    const sampleWords = sampleText.split(' ');
    const userWords = userText.split(' ');
    let correctWords = 0;

    for (let i = 0; i < userWords.length; i++) {
        if (userWords[i] === sampleWords[i]) {
            correctWords++;
        }
    }

    return correctWords;
}

// Function to calculate WPM
function calculateWPM(correctWords, timeTaken) {
    const minutes = timeTaken / 60;
    return Math.round(correctWords / minutes);
}

// Add event listeners to the buttons
startButton.addEventListener('click', startTest);
stopButton.addEventListener('click', stopTest);
retryButton.addEventListener('click', resetTest);

// Initialize the test state
resetTest();