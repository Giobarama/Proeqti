let score = 0;
let wrongGuesses = 0;
let skipped = 0;

function resetGame() {
    wrongGuesses = 0;
    skips = 0;
    score = 0;
    updateScore();
    pickColor();
}

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}

function pickColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    document.getElementById("color-box").style.backgroundColor = color;
    setupColorChoices(color);
}

function setupColorChoices(targetColor) {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const shuffledColors = shuffle(colors.slice());
    for (let i = 0; i < 6; i++) {
        const colorDiv = document.getElementById(`color${i + 1}`);
        colorDiv.style.backgroundColor = shuffledColors[i];
        colorDiv.onclick = function() {
            if (shuffledColors[i] === targetColor) {
                score++;
                updateScore();
                if (score === 10) {
                    alert("You won the game");
                    resetGame();
                } else {
                    pickColor();
                }
            } else {
                wrongGuesses++;
                if (wrongGuesses === 4) {
                    alert("You lose");
                    resetGame();
                }
            }
        };
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.getElementById("skip").addEventListener("click", function() {
    if (skips < 3) {
        skips++;
        pickColor();
    } else {
        alert("You have no more skips");
    }
});

resetGame();