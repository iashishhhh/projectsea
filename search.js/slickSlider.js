$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        centerPadding: '14',
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    // slidesToScroll: 1
                }
            }
        ]
    });
});

// open and close toggle 
$(document).ready(function () {
    // Define Variables for Navbar Elements --1
    const toggler = $('.navbar-toggler');
    const navbarCollapse = $('#navbarSupportedContent');
    // open Navbar
    navbarCollapse.on('shown.bs.collapse', function () {
        toggler.addClass('toggler-open'); // Show open icon
    });
    //close navbar
    navbarCollapse.on('hidden.bs.collapse', function () {
        toggler.removeClass('toggler-open'); // Reset to close icon
    });

    // Close the navbar when click outside  document
    $(document).on('click', function (event) {
        if (!navbarCollapse.is(event.target) && !navbarCollapse.has(event.target).length &&
            !toggler.is(event.target) && !toggler.has(event.target).length) {
            navbarCollapse.collapse('hide');  //click ouside the doc
        }
    });
});


//js for screen smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});



// Ajax form submit ...................................
// Intercepting the form submission
$("#ajaxForm").submit(function (e) {
    e.preventDefault(); // Default form submission prevent karein

    // Getting the form's action attribute
    var action = $(this).attr("action") || "/default-url"; // Agar action attribute nahi ho, default URL ka use karein
    console.log("Action URL:", action);

    // Serializing form data
    var data = {};
    $(this).serializeArray().forEach(function (field) {
        data[field.name] = field.value;
    });
    console.log("Serialized Data:", data);

    // Sending AJAX POST request
    $.ajax({
        type: "POST",
        // url: action,
        data: JSON.stringify(data), // Sending serialized data as JSON
        contentType: "application/json", // JSON data content type
        headers: {
            "Accept": "application/json"
        }
    })
        .done(function (response) {
            console.log("Form submitted successfully!", response);
            alert("Form submitted successfully!");
            $("#ajaxForm")[0].reset(); // Reset form fields
        })
        .fail(function (xhr, status, error) {
            console.error("Error: ", status, error);
            alert("Error: Form submission failed. Please try again later.");
        });
});

// code input clear field
document.getElementById("ajaxForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var form = event.target;
    var inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(function (input) {
        input.value = "";
    });

});
