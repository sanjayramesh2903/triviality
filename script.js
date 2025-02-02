// Basic setup for the Chemistry Olympiad quiz functionality

document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "O2", "H2O2", "CO2"],
            correct: 0
        },
        {
            question: "What is the atomic number of Oxygen?",
            options: ["8", "16", "12", "14"],
            correct: 0
        },
        {
            question: "Which element has the symbol 'Na'?",
            options: ["Sodium", "Neon", "Nitrogen", "Nickel"],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const scoreElement = document.getElementById("score");
    
    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';
        
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = function() {
                checkAnswer(index);
            };
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        if (selectedIndex === questions[currentQuestionIndex].correct) {
            score++;
            scoreElement.textContent = `Score: ${score}`;
        }

        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }

    function showFinalScore() {
        questionElement.textContent = "Quiz Over!";
        optionsElement.innerHTML = `<p>Your final score is: ${score} out of ${questions.length}</p>`;
    }

    loadQuestion();  // Initialize the first question
});
