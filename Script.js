
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('open');
    });
}); 

    // (function() {
    //     emailjs.init("H65n4M445p8XRl3Ux"); // Initialize EmailJS with your user ID
    // })();

    // document.getElementById("contact-form").addEventListener("submit", function(event) {
    //     event.preventDefault(); // Prevent default form submission
        
    //     const form = event.target;
        
    //     const formData = {
    //         name: form.name.value,
    //         company: form.company.value,
    //         address: form.address.value,
    //         email: form.email.value,
    //         phone: form.phone.value,
    //         service: form.service.value
    //     };

    //     emailjs.send("service_contact","template_contact", formData)
    //         .then(function(response) {
    //             console.log("Success:", response);
    //             document.getElementById("success-message").style.display = "block";
    //             document.getElementById("contact-form").reset();
    //         })
    //         .catch(function(error) {
    //             console.log("Error:", error);
    //             document.getElementById("error-message").style.display = "block";
    //         });
    // });
    // $("#contact-form").submit(function (event) {
    //     event.preventDefault(); // Prevent default form submission
        
    //     // Initialize EmailJS with the correct Public Key
    //     emailjs.init("H65n4M445p8XRl3Ux");
    
    //     // Use the correct Service ID and Template ID
    //     emailjs.sendForm('service_contact', 'template_contact', '#contact-form')
    //         .then(function (response) {
    //             console.log('SUCCESS!', response.status, response.text);
    //             document.getElementById("contact-form").reset(); // Reset form fields
    //             alert("Form Submitted Successfully"); // Success message
    //         }, function (error) {
    //             console.log('FAILED...', error); // Log error
    //             alert("Form Submission Failed! Try Again"); // Error message
    //         });
    // });

// Listen for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Send the form data using EmailJS
    emailjs.sendForm('service_oc32vup', 'template_fpyv50b', '#contact-form', 'H65n4M445p8XRl3Ux')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('success-popup').style.display = 'flex';
    }, function(error) {
        console.error('FAILED...', error);
        alert("Error: " + error.text);  // Displaying the actual error message
        document.getElementById('fail-popup').style.display = 'flex';
    });
});


// Close the success popup when the user clicks on the close button
document.getElementById('popup-close-success').addEventListener('click', function() {
    document.getElementById('success-popup').style.display = 'none'; // Hide success popup
});

// Close the fail popup when the user clicks on the close button
document.getElementById('popup-close-fail').addEventListener('click', function() {
    document.getElementById('fail-popup').style.display = 'none'; // Hide fail popup
});
