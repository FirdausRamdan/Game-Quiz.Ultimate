const questions = [
    { question: "Apa ibu kota Indonesia?", options: ["Jakarta", "Surabaya", "Bandung", "Medan"], correct: 0 },
    { question: "Siapa penemu lampu pijar?", options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], correct: 1 },
    { question: "Planet terbesar di tata surya adalah?", options: ["Bumi", "Mars", "Jupiter", "Venus"], correct: 2 },
    { question: "Siapa presiden pertama Indonesia?", options: ["Sukarno", "Suharto", "Habibie", "Megawati"], correct: 0 },
    { question: "Kapan Indonesia merdeka?", options: ["1945", "1950", "1965", "1970"], correct: 0 },
    { question: "Apa nama candi terbesar di Indonesia?", options: ["Borobudur", "Prambanan", "Mendut", "Sewu"], correct: 0 },
    { question: "Siapa pahlawan nasional dari Aceh?", options: ["Cut Nyak Dien", "RA Kartini", "Dewi Sartika", "Martha Christina Tiahahu"], correct: 0 },
    { question: "Apa nama kerajaan Hindu pertama di Indonesia?", options: ["Kutai", "Majapahit", "Sriwijaya", "Mataram"], correct: 0 },
    { question: "Siapa penulis buku 'Laskar Pelangi'?", options: ["Andrea Hirata", "Pramoedya Ananta Toer", "Tere Liye", "Dewi Lestari"], correct: 0 },
    { question: "Apa nama tarian tradisional dari Bali?", options: ["Kecak", "Saman", "Jaipong", "Piring"], correct: 0 },
    { question: "Siapa penemu teori gravitasi?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], correct: 0 },
    { question: "Apa nama ibukota provinsi Jawa Barat?", options: ["Bandung", "Jakarta", "Surabaya", "Semarang"], correct: 0 },
    { question: "Siapa penulis novel 'Bumi Manusia'?", options: ["Pramoedya Ananta Toer", "Andrea Hirata", "Tere Liye", "Dewi Lestari"], correct: 0 },
    { question: "Apa nama gunung tertinggi di Indonesia?", options: ["Puncak Jaya", "Semeru", "Rinjani", "Kerinci"], correct: 0 },
    { question: "Siapa presiden Indonesia saat ini?", options: ["Joko Widodo", "Sukarno", "Suharto", "Habibie"], correct: 0 },
    { question: "Apa nama ibukota provinsi Sumatera Utara?", options: ["Medan", "Padang", "Pekanbaru", "Palembang"], correct: 0 },
    { question: "Siapa pahlawan nasional dari Jawa Tengah?", options: ["Diponegoro", "Sudirman", "Kartini", "Sutomo"], correct: 0 },
    { question: "Apa nama candi Hindu terbesar di Indonesia?", options: ["Prambanan", "Borobudur", "Mendut", "Sewu"], correct: 0 },
    { question: "Siapa penulis buku 'Negeri 5 Menara'?", options: ["Ahmad Fuadi", "Andrea Hirata", "Pramoedya Ananta Toer", "Tere Liye"], correct: 0 },
    { question: "Apa nama tarian tradisional dari Aceh?", options: ["Saman", "Kecak", "Jaipong", "Piring"], correct: 0 }
];

let currentQuestionIndex = 0;
let hearts = 3;
let timer;
let timeLeft = 30;
let points = 0;
let boostActive = false;
let boostMultiplier = 1;
let correctAnswers = 0;
let incorrectAnswers = 0;
let gamePaused = false;
let boostTimer;
let totalTimeSpent = 0;
let timeSpentOnCurrentQuestion = 0;
let timeSpentPerQuestion = [];
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const timerElement = document.getElementById('timer');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'btn btn-primary m-2';
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    feedbackElement.textContent = '';
    timerElement.style.display = 'block'; // Show timer
    resetTimer();
}

// Check the selected answer and update the game state
function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById('feedback');
    const currentQuestion = questions[currentQuestionIndex];
    const optionsElement = document.getElementById('options');
    const buttons = optionsElement.getElementsByTagName('button');

    if (selectedIndex === currentQuestion.correct) {
        feedbackElement.textContent = 'Jawaban Benar!';
        feedbackElement.style.color = 'green';
        points += 5 * boostMultiplier;
        correctAnswers++;
        buttons[selectedIndex].classList.add('correct-answer');
    } else {
        feedbackElement.textContent = 'Jawaban Salah!';
        feedbackElement.style.color = 'red';
        hearts--;
        incorrectAnswers++;
        buttons[selectedIndex].classList.add('incorrect-answer');
        buttons[currentQuestion.correct].classList.add('correct-answer');
        updateHearts();
        if (hearts === 0) {
            gameOver();
        }
        deactivateBoost();
    }

    for (let button of buttons) {
        button.disabled = true;
    }

    updateScore();
    updateResults();
    timeSpentPerQuestion.push(timeSpentOnCurrentQuestion);
    totalTimeSpent += timeSpentOnCurrentQuestion;
    timeSpentOnCurrentQuestion = 0;

    if (currentQuestionIndex === 19) {
        showResults();
    }
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
    updateDifficulty();
    resetTimer();
}

// Update the difficulty level based on the current question index
function updateDifficulty() {
    const bodyElement = document.body;
    if (currentQuestionIndex < 5) {
        bodyElement.className = 'level-1';
    } else if (currentQuestionIndex < 10) {
        bodyElement.className = 'level-2';
    } else if (currentQuestionIndex < 15) {
        bodyElement.className = 'level-3';
    } else {
        bodyElement.className = 'level-4';
    }
}

// Update the hearts display
function updateHearts() {
    const heartsElement = document.getElementById('hearts');
    heartsElement.innerHTML = '';
    for (let i = 0; i < hearts; i++) {
        heartsElement.innerHTML += '<span class="heart">&hearts;</span>';
    }
}

// Reset the timer for the current question
function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timeSpentOnCurrentQuestion = 0;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `Time left: ${timeLeft}s`;
    timerElement.classList.remove('danger');
    timer = setInterval(() => {
        if (!gamePaused) {
            timeLeft--;
            timeSpentOnCurrentQuestion++;
            timerElement.textContent = `Time left: ${timeLeft}s`;
            if (timeLeft <= 10) {
                timerElement.classList.add('danger');
            }
            if (timeLeft === 0) {
                clearInterval(timer);
                hearts--;
                updateHearts();
                if (hearts === 0) {
                    gameOver();
                } else {
                    nextQuestion();
                }
                deactivateBoost();
            }
        }
    }, 1000);
}

// Handle the game over state
function gameOver() {
    clearInterval(timer);
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('timer').style.display = 'none'; // Hide timer
    showResults();
}

// Buy an item from the shop
function buyItem(item) {
    const cost = getItemCost(item);
    if (points >= cost) {
        points -= cost;
        if (item === 'extra-heart') {
            hearts++;
            updateHearts();
        } else if (item === 'slow-time') {
            timeLeft += 10;
        } else if (item === 'skip-question') {
            nextQuestion();
        } else if (item === 'boost') {
            activateBoost();
        } else if (item === 'remove-option') {
            removeOption();
        }
        updatePoints();
    } else {
        alert('Not enough points!');
    }
    updateScore();
}

// Get the cost of an item
function getItemCost(item) {
    if (item === 'extra-heart') return 50;
    if (item === 'slow-time') return 30;
    if (item === 'skip-question') return 20;
    if (item === 'boost') return 40;
    if (item === 'remove-option') return 40;
    return 0;
}

// Activate the boost effect
function activateBoost() {
    boostActive = true;
    boostMultiplier = 1.5;
    document.getElementById('boost').style.display = 'inline';
    document.getElementById('boost').textContent = `Boost: ${boostMultiplier.toFixed(1)}x`;
    boostTimer = setTimeout(deactivateBoost, 10000);
}

// Deactivate the boost effect
function deactivateBoost() {
    boostActive = false;
    boostMultiplier = 1;
    document.getElementById('boost').style.display = 'none';
    clearTimeout(boostTimer);
}

// Remove an incorrect option from the current question
function removeOption() {
    const optionsElement = document.getElementById('options');
    const buttons = optionsElement.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (questions[currentQuestionIndex].correct !== i) {
            buttons[i].style.display = 'none';
            break;
        }
    }
}

// Update the points display
function updatePoints() {
    document.getElementById('points').textContent = `Points: ${points}`;
}

// Update the score display
function updateScore() {
    document.getElementById('score').querySelector('h2').textContent = `Score: ${points}`;
}

// Update the results display
function updateResults() {
    document.getElementById('correct-answers').textContent = `Jawaban Benar: ${correctAnswers}`;
    document.getElementById('incorrect-answers').textContent = `Jawaban Salah: ${incorrectAnswers}`;
}

// Toggle the shop panel
function toggleShop() {
    const shopPanel = document.getElementById('shop-panel');
    shopPanel.classList.toggle('open');
    if (shopPanel.classList.contains('open')) {
        pauseGame();
    } else {
        resumeGame();
    }
}

// Pause the game
function pauseGame() {
    gamePaused = true;
    clearInterval(timer);
}

// Resume the game
function resumeGame() {
    gamePaused = false;
    if (!boostActive) {
        resetTimer();
    }
    document.getElementById('menu-panel').style.display = 'none';
}

// Navigate to the home page
function goHome() {
    window.location.href = 'home.html';
}

// Show the about panel
function showAbout() {
    document.getElementById('about-panel').style.display = 'block';
    pauseGame();
}

// Hide the about panel
function hideAbout() {
    document.getElementById('about-panel').style.display = 'none';
    resumeGame();
}

// Show the reset confirmation panel
function showResetConfirmation() {
    document.getElementById('reset-confirmation').style.display = 'block';
}

// Hide the reset confirmation panel
function hideResetConfirmation() {
    document.getElementById('reset-confirmation').style.display = 'none';
}

// Reset the game state
function resetGame() {
    currentQuestionIndex = 0;
    hearts = 3;
    points = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    totalTimeSpent = 0;
    timeSpentPerQuestion = [];
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('options').style.display = 'block';
    document.getElementById('feedback').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    hideResetConfirmation();
    resumeGame();
    displayQuestion();
    updateDifficulty();
    updateHearts();
    updatePoints();
    updateScore();
}

// Show the quiz results and leaderboard
function showResults() {
    const totalQuestions = correctAnswers + incorrectAnswers;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const resultMessage = document.getElementById('result-message');
    const leaderboardList = document.getElementById('leaderboard-list');
    const averageTimePerQuestion = totalTimeSpent / totalQuestions;

    document.getElementById('total-questions').textContent = `Total Soal Terjawab: ${totalQuestions}`;
    document.getElementById('correct-answers').textContent = `Jawaban Benar: ${correctAnswers}`;
    document.getElementById('incorrect-answers').textContent = `Jawaban Salah: ${incorrectAnswers}`;
    document.getElementById('score-percentage').textContent = `Nilai: ${scorePercentage.toFixed(2)}%`;
    document.getElementById('points-earned').textContent = `Poin: ${points}`;
    document.getElementById('total-time').textContent = `Total Waktu: ${totalTimeSpent}s`;
    document.getElementById('average-time').textContent = `Rata-rata Waktu per Pertanyaan: ${averageTimePerQuestion.toFixed(2)}s`;

    if (scorePercentage < 50) {
        resultMessage.textContent = "Ayo berlatihlah kembali!";
    } else if (scorePercentage < 80) {
        resultMessage.textContent = "Ini tidak cukup, ayo coba lagi!";
    } else if (scorePercentage < 100) {
        resultMessage.textContent = "Mantap, selamat ya atas nilai mu!";
    } else {
        resultMessage.textContent = "Perfect awesome. Kamu terbaik!";
    }

    leaderboard.push({ score: points, correctAnswers, incorrectAnswers, scorePercentage, totalTimeSpent, averageTimePerQuestion });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    leaderboardList.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. Poin: ${entry.score}, Benar: ${entry.correctAnswers}, Salah: ${entry.incorrectAnswers}, Nilai: ${entry.scorePercentage.toFixed(2)}%, Total Waktu: ${entry.totalTimeSpent}s, Rata-rata Waktu: ${entry.averageTimePerQuestion.toFixed(2)}s`;
        leaderboardList.appendChild(listItem);
    });

    document.getElementById('results-panel').style.display = 'block';
}

document.getElementById('menu-button').onclick = () => {
    document.getElementById('menu-panel').style.display = 'block';
    pauseGame();
};

document.getElementById('next-button').onclick = nextQuestion;
document.getElementById('shop-logo').onclick = toggleShop;

window.onload = () => {
    displayQuestion();
    updateDifficulty();
    updateHearts();
    resetTimer();
    updatePoints();
    updateScore();
};