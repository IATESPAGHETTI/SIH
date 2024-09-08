const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const explanationElement = document.getElementById('explanation');
const explanationButton = document.getElementById('explanation-button');
const scoreElement = document.getElementById('score'); // Scoreboard element

let currentQuestionIndex;
let score = 0; // Initialize score

// Array of questions with options, correct answer, and explanation
const questions = [
  {
    question: "What does the Preamble of the Indian Constitution emphasize as its primary goal?",
    options: ["Establishing a monarchy", "Creating a socialist state", "Ensuring justice, liberty, equality, and fraternity", "Promoting a specific religion"],
    correctAnswer: 2,
    explanation: "The Preamble sets out the foundational principles of the Indian Constitution. It declares the intent to establish a society based on justice (social, economic, and political), liberty (of thought, expression, belief, faith, and worship), equality (of status and opportunity), and fraternity (ensuring dignity of the individual and unity of the nation)."
  },
  {
    question: "Which phrase in the Preamble reflects the commitment to democracy and the rule of law?",
    options: ["Sovereign Republic", "We, the People", "Secular State", "Federal Structure"],
    correctAnswer: 1,
    explanation: "We, the People reflects the democratic nature of the Indian Constitution, indicating that the authority of the government is derived from the people, and the rule of law is established by the collective will of the people."
  },
  {
    question: "Which Fundamental Right protects an individual’s freedom to practice any religion of their choice?",
    options: ["Right to Equality", "Right to Freedom of Religion", "Right to Constitutional Remedies", "Right against Exploitation"],
    correctAnswer: 1,
    explanation: "The Right to Freedom of Religion allows individuals to freely profess, practice, and propagate their religion. This ensures religious freedom and protects individuals from discrimination based on religion."
  },
  {
    question: "What does the Right to Constitutional Remedies enable a citizen to do?",
    options: ["Demand free education", "Seek redressal from the courts if Fundamental Rights are violated", "Access to social welfare schemes", "Participate in elections"],
    correctAnswer: 1,
    explanation: "The Right to Constitutional Remedies allows individuals to approach the courts to seek enforcement of their Fundamental Rights if they believe they have been violated. This right ensures legal protection and accountability."
  },
  {
    question: "Which of the following actions is prohibited under the Right against Exploitation?",
    options: ["Child labor in hazardous industries", "Equal pay for equal work", "Freedom of assembly", "Protection of personal liberty"],
    correctAnswer: 0,
    explanation: "The Right against Exploitation prohibits human trafficking and forced labor, including the employment of children in hazardous industries. This protects vulnerable groups from exploitation."
  },
  {
    question: "Which Directive Principle aims to provide free and compulsory education for children?",
    options: ["Promotion of Welfare of the People", "Provision of Adequate Means of Livelihood", "Equal Pay for Equal Work", "Protection of Environment"],
    correctAnswer: 0,
    explanation: "The Directive Principles include provisions for free and compulsory education for children, promoting the welfare of the people and ensuring that every child receives basic education."
  },
  {
    question: "Which Directive Principle focuses on improving the living conditions of the poor?",
    options: ["Prohibition of Child Labor", "Protection of the Environment", "Ensuring Social and Economic Justice", "Promotion of International Peace"],
    correctAnswer: 2,
    explanation: "The Directive Principles aim to ensure social and economic justice, which includes improving the living conditions of the poor and addressing economic inequalities."
  },
  {
    question: "Which Fundamental Duty requires citizens to protect and improve the natural environment?",
    options: ["Duty to respect the Constitution", "Duty to uphold the sovereignty of India", "Duty to protect and improve the natural environment", "Duty to follow the laws of the country"],
    correctAnswer: 2,
    explanation: "One of the Fundamental Duties is to protect and improve the natural environment, including forests, lakes, rivers, and wildlife. This duty emphasizes environmental conservation as a civic responsibility."
  },
  {
    question: "What is the purpose of the Fundamental Duty to respect the national flag and national anthem?",
    options: ["To promote nationalism and unity", "To ensure economic development", "To regulate foreign trade", "To provide free legal aid"],
    correctAnswer: 0,
    explanation: "Respecting the national flag and national anthem fosters a sense of nationalism and unity among citizens, reinforcing their connection to the nation and its values."
  },
  {
    question: "Which Fundamental Duty emphasizes the importance of developing scientific temper and humanism?",
    options: ["Duty to safeguard public property", "Duty to develop scientific temper, humanism, and the spirit of inquiry", "Duty to promote harmony among different religions", "Duty to uphold the Constitution"],
    correctAnswer: 1,
    explanation: "This duty encourages citizens to adopt a rational and scientific approach to life, fostering humanism and the spirit of inquiry to enhance personal and societal development."
  }
];

// Load a random question when the page loads
function loadRandomQuestion() {
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  
  // Display the options
  optionsElement.innerHTML = ''; // Clear previous options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsElement.appendChild(button);
  });

  // Reset feedback, explanation, and explanation button
  feedbackElement.style.opacity = 0;
  feedbackElement.classList.remove('correct', 'incorrect');
  explanationElement.style.display = 'none';
  explanationElement.classList.remove('show'); // Hide explanation box
  explanationButton.style.display = 'none'; // Hide explanation button by default
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctAnswer) {
    feedbackElement.textContent = "Good job!";
    feedbackElement.classList.add('correct');
    feedbackElement.style.opacity = 1;
    score++; // Increment score
    scoreElement.textContent = score; // Update score display
    // Load another question after 2 seconds
    setTimeout(loadRandomQuestion, 2000);
  } else {
    feedbackElement.textContent = "Wrong answer!";
    feedbackElement.classList.add('incorrect');
    feedbackElement.style.opacity = 1;
    // Show explanation button
    explanationButton.style.display = 'block';
    explanationButton.classList.add('show'); // Show explanation button with animation
    explanationButton.removeEventListener('click', handleExplanationClick); // Remove any previous listener
    explanationButton.addEventListener('click', handleExplanationClick);
    
    // Reset score on wrong answer
    score = 0;
    scoreElement.textContent = score; // Reset score display
    // Trigger the expansion animation
    document.querySelector('.quiz-container').classList.add('expand');
  }
}

// Handle the click event for showing explanation
function handleExplanationClick() {
  const currentQuestion = questions[currentQuestionIndex];
  showExplanation(currentQuestion.explanation);
}

// Show the explanation when the button is clicked
function showExplanation(explanation) {
  explanationElement.textContent = explanation;
  explanationElement.style.display = 'block';
  explanationElement.classList.add('show'); // Show explanation box with animation

  // Smooth expansion animation with color shifting effect
  document.querySelector('.quiz-container').classList.add('expand');
}

// Load the first random question when the page loads
loadRandomQuestion();
