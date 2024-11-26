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