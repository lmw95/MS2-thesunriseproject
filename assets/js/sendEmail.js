function sendMail(contactForm) {
    emailjs.send("service_fgrbztc", "enquiry", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "enquiry_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            let form = document.getElementById("myForm");
            form.reset();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
}

let form = document.getElementById("myForm");
form.reset();

// Closes modal when submit is pressed
$(document).ready(function(){
    $("#submitCloseModal").on("click", function() {
        $(".modal-subtitle").css("display", "inline");
    });
});


