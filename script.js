let navbar = document.querySelector('.navbar')

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

$(document).ready(function () {

    $('.button').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400);
        }
        else {
            $('.festival .image').not('.' + filter).hide(200);
            $('.festival .image').filter('.' + filter).show(200);
        }

    });

    $('.festival').magnificPopup({
        delegate: 'a',
        type: 'image',
        festival: {
            enabled: true,
        }
    })

})
