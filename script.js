function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function sendMail(event) {
  event.preventDefault();

  // Get the field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if any field is empty
  if (name === "") {
    alert("Please enter your name.");
    return;
  }
  if (email === "") {
    alert("Please enter your email.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (subject === "") {
    alert("Please enter a subject.");
    return;
  }
  if (message === "") {
    alert("Please enter your message.");
    return;
  }

  // If all fields are valid, send email
  let params = { name, email, subject, message };

  emailjs.send("service_rymbm47", "template_d3gd4zd", params)
    .then(function(response) {
      alert("Email Sent!!");
    }, function(error) {
      alert("FAILED... " + JSON.stringify(error));
    });
}
