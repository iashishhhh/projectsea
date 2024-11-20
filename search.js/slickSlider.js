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



$(document).ready(function () {
    const toggler = $('.navbar-toggler');
    const navbarCollapse = $('#navbarSupportedContent');

    // Toggle the class for the cross icon
    toggler.on('click', function () {
        $(this).toggleClass('toggler-open'); // Add/remove the toggler-open class
    });

    // Optional: Close the navbar and reset the icon when clicking outside
    $(document).on('click', function (event) {
        if (!navbarCollapse.is(event.target) && !navbarCollapse.has(event.target).length &&
            !toggler.is(event.target) && !toggler.has(event.target).length) {
            navbarCollapse.removeClass('show');
            toggler.removeClass('toggler-open'); // Reset the icon

        }

    });
});




