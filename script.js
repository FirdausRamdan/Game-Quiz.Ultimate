const questions = [
    {
      question: "1. Studi tentang kebudayaan adalah suatu studi yang mempelajari...",
      options: [
        "Gagasan-gagasan untuk mewujudkan tindakan dan artefak",
        "Kesenian",
        "Karya sastra dan cerita rakyat",
        "Cara-cara bercocok tanam"
      ],
      correct: 0
    },
    {
      question: "2. Pembangunan merupakan indikator perubahan sosial dan kebudayaan, karena pembangunan...",
      options: [
        "Ikut memperkenalkan hal-hal yang baru",
        "Mengubah dan merombak tradisi",
        "Meningkatkan taraf kehidupan",
        "Memperluas kesempatan kerja"
      ],
      correct: 2
    },
    {
      question: "3. Peninggalan masa lampau berupa sisa-sisa kehidupan, seperti tulang manusia, tulang hewan, dan tumbuhan yang telah membatu karena proses kimiawi disebut dengan...",
      options: [
        "Artefak",
        "Fosil",
        "Flakes",
        "Pebble"
      ],
      correct: 1
    },
    {
      question: "4. Ilmu pengetahuan yang mempelajari kehidupan masa lampau manusia sebelum ada sumber-sumber tertulis adalah...",
      options: [
        "Etnografi",
        "Anthropologi",
        "Arkeologi",
        "Historiografi"
      ],
      correct: 2
    },
    {
      question: "5. Kegiatan ekonomi pada masa Paleolitikum ditandai dengan...",
      options: [
        "Bertani",
        "Berladang",
        "Berburu",
        "Beternak"
      ],
      correct: 2
    },
    {
      question: "6. Berikut ini adalah ciri-ciri kehidupan manusia pada masa Paleolitikum, kecuali...",
      options: [
        "Peralatan hidup terbuat dari batu dan tulang",
        "Sudah mengenal pola kehidupan kesukuan",
        "Kehidupan ekonominya berburu dan mengumpulkan makanan",
        "Hidup secara berkelompok"
      ],
      correct: 1
    },
    {
      question: "7. Alat yang diduga digunakan untuk bercocok tanam pada zaman prasejarah adalah...",
      options: [
        "Bajak",
        "Kapak corong",
        "Chopper",
        "Beliung persegi"
      ],
      correct: 1
    },
    {
      question: "8. Zaman prasejarah ditandai oleh pola kehidupan gotong royong, terutama pada zaman...",
      options: [
        "Paleolitikum",
        "Neolitikum",
        "Logam",
        "Megalitikum"
      ],
      correct: 1
    },
    {
      question: "9. Keranda batu yang bentuknya seperti lesung dan mempunyai tutup dari batu serta di dalamnya sering ditemukan mayat beserta bekal kubur seperti periuk, kapak persegi, dan perhiasan adalah...",
      options: [
        "Dolmen",
        "Sarkofagus",
        "Waruga",
        "Punden"
      ],
      correct: 2
    },
    {
      question: "10. Kapak corong digunakan sebagai perkakas manusia prasejarah pada zaman...",
      options: [
        "Tembaga",
        "Perunggu",
        "Besi",
        "Neolitik"
      ],
      correct: 3
    },
    {
      question: "11. Pada zaman prasejarah, kawasan Asia Tenggara merupakan daerah kesatuan kebudayaan batu muda dan perunggu. Daerah pusat kebudayaan perunggu terletak di...",
      options: [
        "Bachson",
        "Dongson",
        "Hoabinh",
        "Bajak"
      ],
      correct: 1
    },
    {
      question: "12. Profesi yang paling berpengaruh dalam kehidupan masyarakat prasejarah Indonesia adalah...",
      options: [
        "Tentara",
        "Kepala desa dan dukun",
        "Raja",
        "Pedagang"
      ],
      correct: 1
    },
    {
      question: "13. Masyarakat Indonesia pada masa perundagian telah mengenal aturan pembagian kerja karena...",
      options: [
        "Mereka telah hidup menetap",
        "Merupakan masyarakat dengan kehidupan food producing",
        "Teknologi perundagian memerlukan tenaga yang memiliki keahlian khusus",
        "Hidup dalam kelompok suku-suku"
      ],
      correct: 2
    },
    {
      question: "14. Kebudayaan Neolitikum merupakan dasar kebudayaan Indonesia sekarang, sebab...",
      options: [
        "Dikembangkannya pola hidup nomaden",
        "Telah dikenalnya pola pemerintahan berdasarkan kesukuan",
        "Manusia telah mengenal kepercayaan",
        "Kehidupan penduduk telah berubah dari food gathering menjadi food producing"
      ],
      correct: 3
    },
    {
      question: "15. Hasil kebudayaan megalitikum banyak ditemukan di wilayah Nusantara. Salah satu peninggalan kebudayaan Megalitikum adalah waruga, yang sering juga disebut dengan nama...",
      options: [
        "Artefak",
        "Kjokkenmodinger",
        "Abris sous rouche",
        "Kubur batu"
      ],
      correct: 3
    },
    {
      question: "16. Berdasarkan peninggalan kebudayaan dan bahasa, bangsa-bangsa di Asia Tenggara berasal dari rumpun yang sama, yaitu...",
      options: [
        "Melayu Polynesia",
        "Austromelayu",
        "Melanesia",
        "Melayu-Austronesia"
      ],
      correct: 3
    },
    {
      question: "17. Ciri-ciri kehidupan Meganthropus Paleojavanicus, di antaranya adalah...",
      options: [
        "1, 2, dan 3",
        "1, 3, dan 5",
        "2, 3, dan 4",
        "2, 3, dan 5"
      ],
      correct: 1
    },
    {
      question: "18. Sejarah tidak berkembang ke arah depan dengan tujuan yang pasti, melainkan bergerak seperti garis lingkaran yang tinggi-rendahnya diakibatkan oleh keadaan manusia. Pernyataan tersebut adalah pengertian sejarah menurut...",
      options: [
        "Ibnu Khaldun",
        "Herodotus",
        "Moh. Yamin",
        "W. J. S. Poenvandinnata"
      ],
      correct: 0
    },
    {
      question: "19. Seorang guru menceritakan Perang Dunia II kepada siswa di ruang kelas. Hal tersebut dapat digolongkan ke dalam konsep sejarah, yaitu sejarah sebagai...",
      options: [
        "Ilmu",
        "Peristiwa",
        "Kisah",
        "Seni"
      ],
      correct: 1
    },
    {
      question: "20. Rangkaian peristiwa masa lalu yang disusun berdasarkan urutan waktu disebut sebagai konsep...",
      options: [
        "Historiografi",
        "Verifikasi",
        "Periodesasi",
        "Kronologis"
      ],
      correct: 3
    }
  ];
  

const randomQuestions = [
    {
        question: "Random 1: Apa ibu kota negara terpadat di dunia?",
        options: ["Tokyo", "Delhi", "Shanghai", "São Paulo"],
        correct: 0
    },
    {
        question: "Random 2: Siapa penemu teori relativitas?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correct: 1
    },
    {
        question: "Random 3: Planet terdekat dengan matahari adalah?",
        options: ["Venus", "Mars", "Merkurius", "Bumi"],
        correct: 2
    }
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
let difficulty = 'medium'; // Default difficulty
let randomQuestionIndices = [];
let isRandomQuestion = false;

// Initialize random question indices
function initializeRandomQuestions() {
    while (randomQuestionIndices.length < 3) {
        let randomIndex = Math.floor(Math.random() * (questions.length - 5)) + 5;
        if (!randomQuestionIndices.includes(randomIndex)) {
            randomQuestionIndices.push(randomIndex);
        }
    }
}

// Display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const timerElement = document.getElementById('timer');

    if (randomQuestionIndices.includes(currentQuestionIndex)) {
        alert("Berhati-hatilah..");
        isRandomQuestion = true;
        const randomQuestion = randomQuestions[randomQuestionIndices.indexOf(currentQuestionIndex)];
        questionElement.textContent = randomQuestion.question;
        optionsElement.innerHTML = '';

        randomQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'btn btn-primary m-2';
            button.onclick = () => checkAnswer(index, true);
            optionsElement.appendChild(button);
        });
    } else {
        isRandomQuestion = false;
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'btn btn-primary m-2';
            button.onclick = () => checkAnswer(index, false);
            optionsElement.appendChild(button);
        });
    }

    feedbackElement.textContent = '';
    timerElement.style.display = 'block'; // Show timer
    resetTimer();
}

// Check the selected answer and update the game state
function checkAnswer(selectedIndex, isRandom) {
    const feedbackElement = document.getElementById('feedback');
    const optionsElement = document.getElementById('options');
    const buttons = optionsElement.getElementsByTagName('button');

    let correctIndex;
    if (isRandom) {
        correctIndex = randomQuestions[randomQuestionIndices.indexOf(currentQuestionIndex)].correct;
    } else {
        correctIndex = questions[currentQuestionIndex].correct;
    }

    if (selectedIndex === correctIndex) {
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
        buttons[correctIndex].classList.add('correct-answer');
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

    document.getElementById('next-button').style.display = 'block';
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
    updateDifficulty();
    resetTimer();
    document.getElementById('next-button').style.display = 'none';
}

// Update the difficulty level based on the current question index
function updateDifficulty() {
    const bodyElement = document.body;
    if (difficulty === 'easy') {
        bodyElement.className = 'level-1';
    } else if (difficulty === 'medium') {
        bodyElement.className = 'level-2';
    } else if (difficulty === 'hard') {
        bodyElement.className = 'level-3';
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
    timeLeft = difficulty === 'easy' ? 40 : difficulty === 'medium' ? 30 : 20;
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
    if (isRandomQuestion) {
        alert('Tidak bisa menggunakan shop selama soal random!');
        return;
    }
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
    if (isRandomQuestion) {
        alert('Tidak bisa menggunakan boost selama soal random!');
        return;
    }
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
    if (isRandomQuestion) {
        alert('Tidak bisa membuka shop selama soal random!');
        return;
    }
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
    showLeaderboard();
}

// Change the difficulty level
function changeDifficulty() {
    const difficultySelect = document.getElementById('difficulty');
    difficulty = difficultySelect.value;
    updateDifficulty();
}

// Show the settings panel
function showSettings() {
    document.getElementById('settings-panel').style.display = 'block';
    pauseGame();
}

// Hide the settings panel
function hideSettings() {
    document.getElementById('settings-panel').style.display = 'none';
    resumeGame();
}

// Show the leaderboard panel
function showLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. Poin: ${entry.score}, Benar: ${entry.correctAnswers}, Salah: ${entry.incorrectAnswers}, Nilai: ${entry.scorePercentage.toFixed(2)}%, Total Waktu: ${entry.totalTimeSpent}s, Rata-rata Waktu: ${entry.averageTimePerQuestion.toFixed(2)}s`;
        leaderboardList.appendChild(listItem);
    });
    document.getElementById('leaderboard-panel').style.display = 'block';
}

// Hide the leaderboard panel
function hideLeaderboard() {
    document.getElementById('leaderboard-panel').style.display = 'none';
    resumeGame();
}

document.getElementById('menu-button').onclick = () => {
    document.getElementById('menu-panel').style.display = 'block';
    pauseGame();
};

document.getElementById('next-button').onclick = nextQuestion;
document.getElementById('shop-logo').onclick = toggleShop;

window.onload = () => {
    initializeRandomQuestions();
    displayQuestion();
    updateDifficulty();
    updateHearts();
    resetTimer();
    updatePoints();
    updateScore();
};