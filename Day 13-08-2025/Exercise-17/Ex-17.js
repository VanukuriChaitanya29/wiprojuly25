let quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: "Mars"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "7"],
        correct: "8"
    }
];

let currentQuestionIndex = 0;
let score = 0;

let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let feedbackEl = document.getElementById("feedback");
let scoreEl = document.getElementById("score");
let nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";

    let currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach(optionText => {
        let optionBtn = document.createElement("div");
        optionBtn.textContent = optionText;
        optionBtn.classList.add("option");

        optionBtn.addEventListener("click", function () {
            checkAnswer(optionBtn, currentQuestion.correct);
        });

        optionsEl.appendChild(optionBtn);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    let options = document.querySelectorAll(".option");
    options.forEach(option => option.style.pointerEvents = "none");

    if (selectedOption.textContent === correctAnswer) {
        selectedOption.classList.add("correct");
        feedbackEl.textContent = "Correct!";
        score++;
    } else {
        selectedOption.classList.add("wrong");
        feedbackEl.textContent = "Wrong!";
    }

    scoreEl.textContent = "Score: " + score;
}

nextBtn.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        optionsEl.innerHTML = "";
        feedbackEl.textContent = `Final Score: ${score} / ${quizData.length}`;
        nextBtn.style.display = "none";
    }
});

loadQuestion();
