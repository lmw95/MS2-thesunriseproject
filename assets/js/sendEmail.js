function sendMail(contactForm) {
    emailjs.send("service_fgrbztc", "enquiry", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "enquiry_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}

// Closes modal when submit is pressed
$(document).ready(function(){
    $("#submitCloseModal").on("click", function() {
        $(".modal").removeClass("is-active", "is-clipped");
    });
});
