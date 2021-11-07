/* jshint esversion: 8 */

// Functions

/**
 * Async function to retrieve coin data from Coingeko API.
 * The response is converted in JSON format and passed as a parameter
 * when calling @function buildDashboard().
 */
async function getCoins() {
  try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=24&page=1&sparkline=false');
      const data = await res.json();
      buildDashboard(data);
  } catch (error) {
      console.log('Error:' + error);
  }
}


/**
 * Function builds each coin badge dynamically with own content and css.
 * @param {*} coins [the coin data fetched from the API]
 */
function buildDashboard(coins) {

// ForEach method loops through the JSON object
  coins.forEach(coin => {
// Credit to StackOverflow for this syntax. More info in Readme.md
    $('#coins-wrapper').append
    ([
      $('<div/>', { 'class': 'coin col-6 col-md-4 col-lg-3' }).append 
      ([
        $('<div/>', { 'class': 'coin-icon', css: {'background-image': `url(${coin.image})`} }),
        $('<div/>', { 'class': 'coin-icon hide', css: {'background-image': `url(${coin.image})`} }),
        $('<div/>').html(`${coin.symbol}`),
        $('<div/>', { css: {'font-weight': 'bold'}}).html(`${coin.name}`),
        $('<div/>').html(`${coin.current_price} <i class="fas fa-dollar-sign"></i>`),
        $('<div/>', { 'class': 'hide', css: {'color': 'green'} }).html(`24h <i class="fas fa-angle-double-up"></i> $${coin.high_24h}`),
        $('<div/>', { 'class': 'hide', css: {'font-weight': 'bold'}}).html(`${coin.name}`),
        $('<div/>', { 'class': 'hide', css: {'color': 'red'} }).html(`24h <i class="fas fa-angle-double-down"></i> $${coin.low_24h}`)
      ]),
    ]);
  });
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

// Function to target children of the coin badge the user interacts with and toggle "hide" class.
function extraInfo() {
  $(this).children().toggleClass('hide');
}

// Listeners

// Listens for checkbox state change and toggles theme on body.
// Uses session storage to store theme selection state.
$('#theme-switch').on('change', () => {
  $('body').toggleClass('dark light');

// Conditional statement written in shorthand. Checks current theme state and changes the value in session storage.
  $('body').hasClass('dark') ? sessionStorage.setItem('theme', 'dark') : sessionStorage.setItem('theme', 'light');
});

// Listens for hover event on each coin badge and triggers function to display extra information.
$('#coins-wrapper').on('mouseenter mouseleave', '.coin', extraInfo);

switchTheme();
getCoins();
