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
document.querySelectorAll('.nav-link,navbar-brand').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// for small screen auto close toggle when click any navigation tab
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            new bootstrap.Collapse(navbar).hide();
        }
    });
});

