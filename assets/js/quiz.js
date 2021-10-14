// Global Variables

// Quiz control buttons into global variables
const quizStart = $('#quiz-start');
const quizNext = $('#quiz-next');
const quizResults = $('#quiz-results');
const quizRestart = $('#quiz-restart');
var quizIndex = 0;

// Functions

// Function to display next question will be used by event listeners 
// for Start Game and Next Question buttons
function displayQuestion() {
// Clear previous data from quiz card
  $('#quiz-answers').text('');
// Add question text to the "quiz-question" div
  $('#quiz-question').text(questions[quizIndex].question);
// Take answers for current question from the questions.choices array and assign them to a new array
  let answers = questions[quizIndex].choices;
// Iterate the array, create dynamic buttons for each choice using template literals
// and append them to the "quiz-answers" div
  answers.forEach(choice => {
    $(`<button class="answer active">${choice}</button>`).appendTo('#quiz-answers');
  });
// Increment quizIndex for next question
  quizIndex ++;
}

// Event Listeners

// Listens to when the Start Game button is pressed and displays first question
quizStart.on('click', function() {
  displayQuestion();
// Hides the Start Game Button and shows the Next Question Button
  quizStart.addClass('hide');
  quizNext.removeClass('hide');
});
