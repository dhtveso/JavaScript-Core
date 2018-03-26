function attachEvents() {
    $('#items').find('li').click(function () {
        if (!($(this).attr('data-selected'))) {
            $(this).attr('data-selected', true).css('background-color', '#DDD');
        } else {
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '#FFF');
        }
    });

    $('#showTownsButton').click(function () {
        let selectedTown = $('#items li[data-selected]').map(function () {
            return  this.textContent;
        }).toArray().join(', ');

        $('#selectedTowns').text(`Selected towns: ${selectedTown}`);
    });
}