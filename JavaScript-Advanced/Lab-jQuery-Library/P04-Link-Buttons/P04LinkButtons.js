function attachEvents() {
    $('a').click(function name() {
        let currentButton = $(this);
            if (!currentButton.hasClass('selected')) {
                $('a').removeClass('selected');
                currentButton.addClass('selected');

            } else {
                currentButton.removeClass('selected');
            }
    })
}
