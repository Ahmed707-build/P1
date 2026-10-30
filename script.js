
const cards = [
    { value: 1 },
    { value: 2 },
    { value: 4 },
    { value: 8 },
    { value: 16 }
];

let currentCard = 0;
let guessedNumber = 0;

// Start the game

function startGame() {

    currentCard = 0;
    guessedNumber = 0;

    document.getElementById("startScreen")
        .classList.add("hidden");

    document.getElementById("resultScreen")
        .classList.add("hidden");

    document.getElementById("gameScreen")
        .classList.remove("hidden");

    showCard();
}

// Display number cards

function showCard() {

    if (currentCard >= cards.length) {
        revealNumber();
        return;
    }

    const value = cards[currentCard].value;

    const numberCard = document.getElementById("numberCard");

    numberCard.innerHTML = "";

    // Find all numbers containing this binary value

    for (let i = 1; i <= 30; i++) {

        if ((i & value) !== 0) {

            const div = document.createElement("div");

            div.className = "number";
            div.textContent = i;

            numberCard.appendChild(div);
        }
    }

    document.getElementById("progress").textContent =
        `MAGIC CARD ${currentCard + 1} OF 5`;

    document.getElementById("question").textContent =
        "🤔 Is your secret number on this card?";
}

// Get YES or NO answer

function answer(isYes) {

    if (isYes) {
        guessedNumber += cards[currentCard].value;
    }

    currentCard++;

    showCard();
}

// Reveal the number

function revealNumber() {

    document.getElementById("gameScreen")
        .classList.add("hidden");

    document.getElementById("resultScreen")
        .classList.remove("hidden");

    const result = document.getElementById("resultNumber");

    result.textContent = guessedNumber;

    celebrate();
}

// Celebration effect

function celebrate() {

    const emojis = [
        "🎉", "✨", "🎊",
        "💜", "⭐", "🧠", "🔮"
    ];

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Restart game

function restartGame() {

    document.getElementById("resultScreen")
        .classList.add("hidden");

    document.getElementById("startScreen")
        .classList.remove("hidden");
}
