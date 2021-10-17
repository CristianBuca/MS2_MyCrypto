// Global Variables

// Quiz control buttons into global variables
const quizStart = $('#quiz-start');
const quizNext = $('#quiz-next');
const quizResults = $('#quiz-results');
const quizRestart = $('#quiz-restart');

var quizIndex = 0;
var quizScore = 0;
var interval;
var elapsedTime;

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
    $(`<button class="answer quiz-btn">${choice}</button>`).appendTo('#quiz-answers');
  });
  ++ quizIndex;
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
    quizScore +=5;
  } else {
    $(this).addClass('wrong');
    quizScore -=2;
  }
  $('#score').text(`Score: ${quizScore}`);
}

/**
 * Function to keep track and display elapsed time since the start of the quiz
 * On a 10ms interval it calculates the difference between the current date and the date the function was called.
 * parseInt is used to display minutes and seconds as whole numbers
 * Conditions are use to check when each division reaches the next time unit and modulo operation assures they reset to 0
 */

//  This function is based on the Crypters Infotech Online Stopwatch tutorial. Full credit in Readme.md

function timer() {
  var startTime = Date.now();
  interval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    var mins = parseInt(elapsedTime / 1000 / 60);
    if (mins >= 60) mins %= 60;
    var secs = parseInt(elapsedTime / 1000);
    if (secs >= 60) secs %= 60;
    var ms = elapsedTime;
    if (ms >= 1000) ms %= 1000;
    $('#timer').text(`Elapsed time: ${mins} - ${secs} - ${ms}`);
  }, 10)
}

/**
 * Function to show results screen once the user went through all the questions
 * Stops the timer
 * Clears the last question data from the screen and displays the completion time and final score
 * Hides the Show Results button and displays the Try Again button
 */

function showResults() {
  clearInterval(interval);
  $('#quiz-question').text('Well done! You finished the quiz');
  $('#quiz-answers').html(`
  <p class="results"> Your completion time was ${elapsedTime / 1000}<sub>seconds</sub>
  </br>
  <p class="results"> Your total score is ${quizScore}`);
  $('#timer, #score').text('');
  $('#quiz-results').addClass('hide');
  $('#quiz-restart').removeClass('hide');
}

// Event Listeners

// Listens for the Start Game button click and displays first question
// Hides the Start Game Button and shows the Next Question Button

quizStart.on('click', function() {
  displayQuestion();
  quizStart.addClass('hide');
  quizNext.removeClass('hide');
  timer();
});

// Listens for the Next Question button click and based on the current questionIndex
// Displays the next question if available or reveals the show Show Results button to end game

quizNext.on('click', function() {
  if (quizIndex < questions.length) displayQuestion();
  else {
    showResults()
    quizNext.addClass('hide');
    quizIndex = 0;
  }
});

// Listens for clicks on the answer buttons and calls checkAnswer function
$('#quiz-answers').on('click', 'button', checkAnswer);

// Listens for click on Try Again button and reloads the page
$('#quiz-restart').on('click', () => location.reload());

// Listens for click on the info icon and displays the info modal
$('#quiz-info').on('click', () => $('#info-modal-container').css({'opacity' : '1', 'pointer-events' : 'auto'}));

// Listens for clicks on the modal close icon and hides the modal
$('#modal-close').on('click', () => $('#info-modal-container').css({'opacity' : '0', 'pointer-events' : 'none'}));

// Listens for checkbox state change and toggles theme on body
// Uses session storage to remember theme selection on reload
$('#theme-switch').on('change', () => {
  $('body').toggleClass('dark');
  $('body').hasClass('dark') ? sessionStorage.setItem('theme', 'dark') : sessionStorage.removeItem('theme');
});
