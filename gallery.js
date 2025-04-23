$(document).ready(function() {
    // Show all images on initial load
    $('.gallery-img').fadeIn();

    // Filter button click
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');

        $('.gallery-img').fadeOut(200);

        setTimeout(() => {
            if (filter === 'all') {
                $('.gallery-item .gallery-img').slideDown();
            } else {
                $('.gallery-item').each(function() {
                    const match = $(this).hasClass(filter);
                    if (match) {
                        $(this).find('.gallery-img').slideDown();
                    } else {
                        $(this).find('.gallery-img').hide();
                    }
                });
            }
        }, 200);
    });
});