// Global variables
// var data = [];

// Functions

// Async function to retrieve coin data from coingecko

async function getCoins() {
  try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=24&page=1&sparkline=false');
      const data = await res.json();
      buildDashboard(data);
  } catch (error) {
      console.log('Error:' + error);
  }
}

function buildDashboard(coins) {
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
        $('<div/>', { 'class': 'hide'}).html(`24h <i class="fas fa-angle-double-up"></i> ${coin.high_24h}`),
        $('<div/>', { 'class': 'hide', css: {'font-weight': 'bold'}}).html(`${coin.name}`),
        $('<div/>', { 'class': 'hide'}).html(`24h <i class="fas fa-angle-double-down"></i> ${coin.low_24h}`)
      ]),
    ]);
  });
}

/**
 * Function to maintain theme selection during the session
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

// Function to target children of the coin badged clicked and toggle "hide" class
function extraInfo() {
  $(this).children().toggleClass('hide');
}

// Listeners

// Listens for checkbox state change and toggles theme on body
// Uses session storage to store theme selection state
$('#theme-switch').on('change', () => {
  $('body').toggleClass('dark light');
  $('body').hasClass('dark') ? sessionStorage.setItem('theme', 'dark') : sessionStorage.setItem('theme', 'light');
});

// Listens for hovering event on each coin badge and triggers extraInfo function
$('#coins-wrapper').on('mouseenter mouseleave', '.coin', extraInfo);

switchTheme();
getCoins();
