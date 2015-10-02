$(document).ready(function () {

    var jGameEl = $('#g-body');

    $('.gbr-col').on('click', function (e) {

        var target = $(e.target),
            jFirstSelectEl = jGameEl.find('.f-click');

        if (jFirstSelectEl.length) {
            if (jFirstSelectEl.data('id') === target.data('id')) {
                target.toggleClass('selected').data('id', !target.data('id'));
            } else {
                alert('no allowed');
            }

            jFirstSelectEl.removeClass('f-click');
        } else {
            target.addClass('f-click');
        }
    });
});