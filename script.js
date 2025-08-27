function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    document.getElementById("name").focus();
    return;
  }

  if (email === "") {
    alert("Please enter your email.");
    document.getElementById("email").focus();
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    document.getElementById("email").focus();
    return;
  }

  if (subject === "") {
    alert("Please enter a subject.");
    document.getElementById("subject").focus();
    return;
  }

  if (message === "") {
    alert("Please enter your message.");
    document.getElementById("message").focus();
    return;
  }

  const params = { name, email, subject, message };

  emailjs.send("service_rymbm47", "template_d3gd4zd", params)
    .then(() => {
      alert("Email sent successfully!");
      // Optionally reset form here
      document.querySelector("form").reset();
    })
    .catch(error => {
      alert("Failed to send email: " + error.text);
    });
}
