// Global Variables

var coinList = new Array();
var portfolio = new Array();

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
    localStorage.setItem(item.id, amount);
  });
  location.reload();
}

/**
 * This function selects the hidden currency ID stored in the asset row that is selected for removal
 * by the event listener and removes it from localStorage, then removes the assets table row.
 * Credit to Codepedia for the syntax: https://codepedia.info/jquery-get-table-cell-td-value-div/
 */
function removeAsset() {
  var id = $(this).closest('tr').find('.asset-id').html();
  localStorage.removeItem(id);
  $(this).closest('tr').remove();
}

// Credit for iterating localStorage https://stackoverflow.com/a/37507935
function buildPortfolio() {
  Object.keys(localStorage).forEach(asset => {
    portfolio.push({coin: asset, amount: localStorage.getItem(asset)});
  });
}

async function displayPortfolio() {
  const api = 'https://api.coingecko.com/api/v3/coins/markets'
  try {
    // Get ids to be used in api url from portfolio into a string separated by ","
    let ids = portfolio.map(asset => asset.coin.toLowerCase()).join(',');
    let url = `${api}?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const response = await fetch(url);
    const data = await (response.json());
    let portfolioTotal = 0;
    $('#portfolio').append
      ([$('<table>', {'id': 'asset-table'}).append
        ([$('<tr>').append
          ([$('<th>').html(' '),
            $('<th>').html('Name'),
            $('<th>').html('Price'),
            $('<th>').html('Holdings'),
            $('<th>').html('Value'),
            $('<th>').html(' ')
          ])
        ])
      ])

    data.forEach(asset => {
      var match = portfolio.find(obj => {
        return obj.coin === asset.id;
      });
      var assetWorth = match.amount * asset.current_price;
      $('#asset-table').append
        ([$('<tr>').append
          ([$('<td>', {'class': 'asset-icon', css: {'background-image': `url(${asset.image})`}}),
            $('<td>').html(asset.name),
            $('<td>').html(asset.current_price.toFixed(3)),
            $('<td>').html(match.amount),
            $('<td>').html(assetWorth.toFixed(3)),
            $('<td>', {'class': 'remove-asset'}).html('<i class="fas fa-trash-alt"></i>'),
            $('<td>', {'class': 'asset-id'}).html(asset.id)
          ])
        ])
        portfolioTotal += assetWorth;
    })
    $('#total').html(portfolioTotal);
  }
  catch(e) {
    console.error(e);
    // alert('CoinGeko is a bit slow sending the data. Try again later');
  }
}

/**
 * Function to maintain theme selection through the session.
 * Uses session storage data from last #theme-switch change and sets the body and #theme-switch 
 * state to last known selection after page reload.
 */
 function switchTheme() {
  if (sessionStorage.getItem('theme') === 'dark') {
    $('body').toggleClass('light dark');
    $('#theme-switch input').prop('checked', true);
  }
}

// Event Listeners

// Listens for checkbox state change and toggles theme on body
// Uses session storage to store theme selection state
$('#theme-switch').on('change', () => {
  $('body').toggleClass('dark light');
  $('body').hasClass('dark') ? sessionStorage.setItem('theme', 'dark') : sessionStorage.setItem('theme', 'light');
});

$('#add-asset').on('click', storeAsset);

$('#portfolio').on('click', '.remove-asset', removeAsset);

switchTheme();
buildPortfolio();
getCoinList();
displayPortfolio();
