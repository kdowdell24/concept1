//Prevents page redirection after clicking Submit button
$('#contact-form').on('submit', function(e) {
	
    e.preventDefault();
 
});

//Resets form after submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function () {
	$("#submit-button").html("Thank You!");
	contactForm.reset();
});
