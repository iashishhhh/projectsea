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
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    //  navbar is opened
    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        toggler.classList.add('toggler-open'); // Show open icon
    });

    //  navbar is closed
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        toggler.classList.remove('toggler-open'); // Reset to close icon
    });

    // Close the navbar when clicking outside
    document.addEventListener('click', function (event) {
        if (!navbarCollapse.contains(event.target) &&
            !toggler.contains(event.target)) {
            // Collapse the navbar
            $(navbarCollapse).collapse('hide');  //hide when click outside the document
        }
    });
});
 



