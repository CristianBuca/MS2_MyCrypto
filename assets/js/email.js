// Credit to Code Institute lesson "Sending Emails Using EmailJS"

function sendMail(contactForm) {
  emailjs.init("user_iyGKuAhxS6sgm3Z6ZvXd0");
  emailjs.send("service_03dgxm2", "mycrypto", {
      "from_name": contactForm.userName.value,
      "from_email": contactForm.email.value,
      "message": contactForm.message.value,
  })
  .then(
      function(response) {
          console.log("Message Sent", response);
      },
      function(error) {
          console.log("Failed", error);
      }
  );
  return false; //to prevent the page from refreshing when submitting the form
}