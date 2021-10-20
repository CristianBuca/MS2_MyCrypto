// Global Variables

// Functions

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

switchTheme();