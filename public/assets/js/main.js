$(function() {
    $('[data-bg]').each(function () {
        var imgUrl = $(this).data('bg');
        $(this).css({
            'background': 'url("' + imgUrl + '")'
        });
    });
});
