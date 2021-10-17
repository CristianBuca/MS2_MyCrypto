// Global variables
// var data = [];

// Functions

// Async function to retrieve coin data from coingecko

async function getCoins() {
  try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false');
      const data = await res.json();
      buildDashboard(data);
  } catch (error) {
      console.log('Error:' + error);
  }
}

function buildDashboard(coins) {
  console.log(coins);
  coins.forEach(coin => {
    $(`
    <div class="coin col-6 col-md-4 col-lg-3">
      <div>${coin.symbol}</div>
      <div>${coin.name}</div>
      <div>${coin.current_price}</div>
    </div>
    `).appendTo('#coins-wrapper').css('background-image', `url(${coin.image})`);
  });
}

/**
 * Function to maintain theme selection during the session
 * Uses session storage data from last #theme-switch change
 * and sets the body and #theme-switch state to last known 
 * selection after page reload.
 */

 function switchTheme() {
  if (sessionStorage.getItem('theme')) {
    $('body').addClass('dark');
    $('#theme-switch input').prop('checked', true);
  }
}

// Listeners

// Listens for checkbox state change and toggles theme on body
// Uses session storage to store theme selection state
$('#theme-switch').on('change', () => {
  $('body').toggleClass('dark');
  $('body').hasClass('dark') ? sessionStorage.setItem('theme', 'dark') : sessionStorage.removeItem('theme');
});

switchTheme();

getCoins();