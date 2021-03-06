/* jshint esversion: 8 */

// Global Variables

// Quiz control buttons into global variables
const quizStart = $('#quiz-start');
const quizNext = $('#quiz-next');

var quizIndex = 0;
var quizScore = 0;
var interval;
var elapsedTime;

// Credit for this method to Web Dev Simplified. Full credit in readme.
var randomQuestions = questions.sort(() => Math.random() - .5);

// Functions

/**
* Function to display next question which will be used by event listeners for Start Game and Next Question buttons.
* Clear previous data from quiz card
* Add question text to the "quiz-question" div
* Take answers for current question from the questions.choices array and assign them to a new array
* Iterate the array, create dynamic buttons for each choice using template literals and append them to the "quiz-answers" div
* Increment quizIndex for next question
*/

function displayQuestion() {
  $('#quiz-answers').text('');
  $('#quiz-question').text(randomQuestions[quizIndex].question);
  let answers = randomQuestions[quizIndex].choices;

// For Loop to iterate through the the answer choices array
  for (let i = 0; i < answers.length; i++) {
    $(`<button class="answer quiz-btn active">${answers[i]}</button>`).appendTo('#quiz-answers');
  };
  $('#quiz-image').css('background-image', `url("assets/img/quiz_img/quiz_${Math.floor(Math.random() * randomQuestions.length + 1)}_min.jpg")`);
  ++ quizIndex;
}

/** 
 * Function to check if selected answer is correct.
 * Checks if text on the clicked button matches the text in the question object with the "correct" key.
 * Validates the answer by changing the button's appearance.
 * If correct, an extra paragraph is appended with validation text from the question object with "validation" key.
 */

function checkAnswer() {
  if (this.innerText == randomQuestions[quizIndex - 1].correct) {
    $(this).addClass('correct').removeClass('active');
    $(this).parent().append(`<p id="valid">${randomQuestions[quizIndex - 1].validation}</p>`);
    quizScore +=5;
  } else {
    $(this).addClass('wrong').removeClass('active');
    quizScore -=2;
  }
  $('#score').text(`Points: ${quizScore}`);
}

/**
 * Function to keep track and display elapsed time since the start of the quiz. 
 * On a 10ms interval it calculates the difference between the current date and the date the function was called.
 * parseInt is used to display minutes and seconds as whole numbers.
 * Conditional statements are used to check when each division reaches the next time unit and modulo operation assures they reset to 0.
 * 
 * Credit: This function is based on the Crypters Infotech Online Stopwatch tutorial. Full credit in Readme.md
 */

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
    $('#timer').text(`${mins} : ${secs} : ${ms}`);
  }, 10)
}

/**
 * Function to show results screen once the user went through all the questions.
 * Stops the timer.
 * Clears the last question data from the screen and displays the completion time and final score.
 * Hides the Show Results button and displays the Try Again button.
 */

function showResults() {
  clearInterval(interval);
  $('#quiz-question').text('Well done! You finished the quiz');
  $('#quiz-answers').html(`
  <p class="results"> You completed the quiz in: ${elapsedTime / 1000}<sub>seconds</sub>
  </br>
  <p class="results">with a score of: ${quizScore} points</p>
  </br>
  <p class="results"> Think you can do better next time?</p>`);
  $('#timer, #score').text('');
  $('#quiz-results').addClass('hide');
  $('#quiz-restart').removeClass('hide');
}

/**
 * Function to maintain theme selection during the session.
 * Uses session storage data from last #theme-switch change
 * and sets the body and #theme-switch state to last known 
 * selection after page reload.
 */
function switchTheme() {
  if (sessionStorage.getItem('theme') === 'dark') {
    $('body').toggleClass('light dark');
    $('#theme-switch input').prop('checked', true);
  }
}

// Event Listeners

// Listens for the Start Game button click and displays first question.
// Hides the Start Game Button and shows the Next Question Button.

quizStart.on('click', function() {
  displayQuestion();
  quizStart.addClass('hide');
  quizNext.removeClass('hide');
  timer();
});


// Listens for the Next Question button click and based on the current questionIndex
// displays the next question if available or reveals the Show Results button to end game.

quizNext.on('click', function() {
  if (quizIndex < randomQuestions.length) displayQuestion();
  else {
    showResults()
    quizNext.addClass('hide');
    quizIndex = 0;
  }
});

// Listens for clicks on the answer buttons and calls checkAnswer function
$('#quiz-answers').on('click', '.active', checkAnswer);

// Listens for click on Try Again button and reloads the page
$('#quiz-restart').on('click', () => location.reload());

// Listens for click on the info icon and displays the info modal
$('#quiz-info').on('click', () => $('#info-modal-container').css({'opacity' : '1', 'pointer-events' : 'auto'}));

// Listens for clicks on the modal close icon and hides the modal
$('#modal-close').on('click', () => $('#info-modal-container').css({'opacity' : '0', 'pointer-events' : 'none'}));

// Listens for checkbox state change and toggles theme on body
// Uses session storage to store theme selection state
$('#theme-switch').on('change', () => {
  $('body').toggleClass('dark light');
// Conditional statement written in shorthand. Checks current theme state and changes the value in session storage.
  $('body').hasClass('dark') ? sessionStorage.setItem('theme', 'dark') : sessionStorage.setItem('theme', 'light');
});

switchTheme();