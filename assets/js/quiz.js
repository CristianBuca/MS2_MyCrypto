// Global Variables

// Quiz control buttons into global variables
const quizStart = $('#quiz-start');
const quizNext = $('#quiz-next');
const quizResults = $('#quiz-results');
const quizRestart = $('#quiz-restart');
var quizIndex = 0;

// Functions

/**
* Function to display next question which will be used by event listeners for Start Game and Next Question buttons
* Clear previous data from quiz card
* Add question text to the "quiz-question" div
* Take answers for current question from the questions.choices array and assign them to a new array
* Iterate the array, create dynamic buttons for each choice using template literals and append them to the "quiz-answers" div
* Increment quizIndex for next question
*/

function displayQuestion() {
  $('#quiz-answers').text('');
  $('#quiz-question').text(questions[quizIndex].question);
  let answers = questions[quizIndex].choices;
  answers.forEach(choice => {
    $(`<button class="answer active">${choice}</button>`).appendTo('#quiz-answers');
  });
  quizIndex ++;
}

/** 
 * Function to check if selected answer is correct
 * Checks if text on the clicked button matches the text in the question object with the "correct" key
 * Validates the answer by changing the button's appearance
 * If correct, an extra paragraph is appended with validation text from the question object with "validation" key
 */

function checkAnswer() {
  if (this.innerText == questions[quizIndex -1 ].correct) {
    $(this).addClass('correct');
    $(this).parent().append(`<p id="valid">${questions[quizIndex - 1].validation}</p>`);
  } else {
    $(this).addClass('wrong');
  }
}

// Event Listeners

// Listens for the Start Game button click and displays first question
// Hides the Start Game Button and shows the Next Question Button

quizStart.on('click', function() {
  displayQuestion();
  quizStart.addClass('hide');
  quizNext.removeClass('hide');
});

// Listens for the Next Question button click and based on the current questionIndex
// Displays the next question if available or reveals the show Show Results button to end game

quizNext.on('click', function() {
  if (quizIndex < questions.length) displayQuestion();
  else {
    quizNext.addClass('hide');
    quizResults.removeClass('hide');
    quizIndex = 0;
  }
});

// Listens for clicks on the answer buttons
$('.answer').click(checkAnswer);
