/* jshint esversion: 8 */

// Credit for email validation expression: https://stackoverflow.com/a/9204568
function validateEmail(email) {
	var em = /\S+@\S+\.\S+/;
	return em.test(email);
}

function validateForm() {
	if ($('#userName').val() === '') popUp($('#userName'));
		else if (!validateEmail($('#email').val())) console.log('error e');
			else if ($('#message').val() === '') console.log('error m');
				else sendMail();
	return false;
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
          console.log('Message Sent', response);
      },
      function(error) {
          alert('Unable to Send Message :( Please try again later.')
          console.log('Failed', error);
      }
  );
  return false; //to prevent the page from refreshing when submitting the form
}