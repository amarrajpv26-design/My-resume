function sendMail(event){
     event.preventDefault(); 

    let parms = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_rymbm47", "template_d3gd4zd", parms)
        .then(function(response) {
            alert("Email Sent!!");
        }, function(error) {
            alert("FAILED... " + JSON.stringify(error));
        });
}