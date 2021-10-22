// Global Variables
var coinList = new Array();

// Functions

async function getCoinList() {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    coinList = await response.json();
    $('#all-coins').html(`${coinList.map((coin) => `<option value="${coin.name}"></option>`)}`);
  } catch(e) {
    console.log(e);
  }
}

/**
 * This function checks if the user has input the name or the cryptocurrency symbol
 * against the list of coins retrieved from the API.
 * For a user-friendly experience all strings are converted to lowercase before being checked.
 * Function uses Local Storage to keep track of the user's portfolio between sessions.
 */
 function storeAsset() {
  const key = $('#coin-select')[0].value;
  const amount = $('#inp-value')[0].value;

  coinList.forEach(item => {
    if ((key.toLowerCase() === item.symbol.toLowerCase() || key.toLowerCase() === item.name.toLowerCase()) && amount) 
    localStorage.setItem(item.name, amount)
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

// Event Listeners

// Listens for checkbox state change and toggles theme on body
// Uses session storage to store theme selection state
$('#theme-switch').on('change', () => {
  $('body').toggleClass('dark');
  $('body').hasClass('dark') ? sessionStorage.setItem('theme', 'dark') : sessionStorage.removeItem('theme');
});

$('#add-asset').on('click', storeAsset);

for (i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  lsOutput.innerHTML += `${key}: ${value}</br>`;
}

switchTheme();
getCoinList()