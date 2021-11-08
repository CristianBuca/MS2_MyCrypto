/* jshint esversion: 8 */

/**
 * Checks in a conditional loop if the form input fields are filled before calling @function sendMail()
*/
function validateForm() {
	if ($('#userName').val() === '') popUp($('#userName'));
		else if (!validateEmail($('#email').val())) popUp($('#email'));
			else if ($('#message').val() === '') popUp($('#message'));
				else sendMail();
	return false; //to prevent the page from refreshing when submitting the form
}

/**
 * Checks an email address input for correct syntax.
 * Credit for email validation expression: https://stackoverflow.com/a/9204568
 * @param email [The email that is checked].
 * @returns [boolean value].
 */

function validateEmail(email) {
	var em = /\S+@\S+\.\S+/;
	return em.test(email);
}

// Credit to Code Institute lesson "Sending Emails Using EmailJS"
// Credit to EmailJS API documentation: https://www.emailjs.com/docs/ 
function sendMail() {
  emailjs.init("user_iyGKuAhxS6sgm3Z6ZvXd0");
  emailjs.send("service_03dgxm2", "mycrypto", {
    "from_name": $('#userName').val(),
    "from_email": $('#email').val(),
    "message": $('#message').val(),
  })
  .then(
    function(response) {
      alert('Message Sent');
			$('#invalidEntry').removeClass('show');
			$('#contact-modal').modal('hide');
      console.log('Message Sent', response);
    },
    function(error) {
      alert('Unable to Send Message :( Please try again later.')
      console.log('Failed', error);
    }
  );
}

/**
 * Function to deploy a pop-up message
 * @param element [the input triggering this function]
 */
function popUp(element) {
	$("#invalidEntry").addClass('show').css('top', (element.position().top - 40) + 'px').text('Invalid entry');
}