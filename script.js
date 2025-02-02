document.addEventListener("DOMContentLoaded", function() {
    const exams = {
        "F=MA": [
            {
                question: "What is the formula for work?",
                options: ["W = F × d", "W = F / d", "W = d × t", "W = F × t"],
                correct: 0
            },
            {
                question: "What is Newton’s Second Law?",
                options: ["F = m × a", "F = m / a", "F = a × v", "F = m × v"],
                correct: 0
            }
        ],
        "AIME": [
            {
                question: "What is the sum of the angles in a triangle?",
                options: ["180°", "90°", "360°", "270°"],
                correct: 0
            },
            {
                question: "What is the quadratic formula?",
                options: ["x = (-b ± √(b² - 4ac)) / 2a", "x = b² - 4ac", "x = -b / 2a", "x = (b ± √(a² - 4c)) / 2a"],
                correct: 0
            }
        ],
        "AMC 8": [
            {
                question: "What is the area of a square with side length 4?",
                options: ["16", "8", "12", "4"],
                correct: 0
            },
            {
                question: "What is the value of π?",
                options: ["3.14", "3.1416", "2.71", "1.62"],
                correct: 1
            }
        ],
        "AMC 10": [
            {
                question: "What is the area of a circle with radius 3?",
                options: ["28.27", "9.42", "18.84", "12.57"],
                correct: 0
            },
            {
                question: "What is the sum of the interior angles of a quadrilateral?",
                options: ["360°", "180°", "90°", "270°"],
                correct: 0
            }
        ],
        "AMC 12": [
            {
                question: "What is the derivative of x²?",
                options: ["2x", "x", "x²", "1"],
                correct: 0
            },
            {
                question: "What is the integral of 1/x?",
                options: ["ln|x| + C", "x + C", "e^x + C", "1/x + C"],
                correct: 0
            }
        ]
    };

    let currentExam = "F=MA";  // Change this to any exam you want to start with
    let currentQuestionIndex = 0;
    let score = 0;
    let timerInterval;
    let timeLeft = 1800;  // Set 30 minutes for the exam

    // Display the exam title
    document.getElementById('exam-title').textContent = `${currentExam} Mock Exam`;

    // Load the first question
    loadQuestion();

    // Timer setup
    timerInterval = setInterval(function() {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("time-left").textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);

    function loadQuestion() {
        const examData = exams[currentExam];
        const currentQuestion = examData[currentQuestionIndex];
        
        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML = `
            <p>${currentQuestion.question}</p>
            ${currentQuestion.options.map((option, index) => `
                <button onclick="selectAnswer(${index})">${option}</button>
            `).join('')}
        `;
    }

    function selectAnswer(selectedIndex) {
        const examData = exams[currentExam];
        if (selectedIndex === examData[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < exams[currentExam].length) {
            loadQuestion();
        } else {
            submitExam();
        }
    }

    function submitExam() {
        clearInterval(timerInterval);
        const result = document.getElementById("result");
        result.style.display = "block";
        result.innerHTML = `
            <p>Exam Over!</p>
            <p>Your score is ${score} out of ${exams[currentExam].length}</p>
        `;
        document.getElementById("submit-btn").style.display = "none";  // Hide submit button after exam
    }
});
