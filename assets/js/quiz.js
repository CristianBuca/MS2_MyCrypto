// Global Variables

// Quiz control buttons into global variables
const quizStart = $('#quiz-start');
const quizNext = $('#quiz-next');
const quizResults = $('#quiz-results');
const quizRestart = $('#quiz-restart');


// Functions

// Function to display next question will be used by event listeners 
// for Start Game and Next Question buttons
function displayQuestion() {
// Clear previous data from quiz card
  $('#quiz-question').text('');
  $('#quiz-answers').text('');
}

// Event Listeners

// Listens to when the Start Game button is pressed and displays first question
quizStart.on('click', function() {
  displayQuestion();
// Hides the Start Game Button and shows the Next Question Button
  quizStart.addClass('hide');
  quizNext.removeClass('hide');
});
