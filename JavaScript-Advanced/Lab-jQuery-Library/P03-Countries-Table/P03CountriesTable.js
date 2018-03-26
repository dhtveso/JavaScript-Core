function initializeTable() {
    $('#createLink').click(createCountry)
    seedCountry('Bulgaria', 'Sofia');
    seedCountry('Germany', 'Berlin');
    seedCountry('Russia', 'Moscow');
    fixRowLinks();

    function seedCountry(country, capital) {
        let currentRow = $('<tr>').append($('<td>').text(country))
                                  .append($('<td>').text(capital))
                                  .append($('<td>')
                                     .append($('<a href="#">[Up] </a>').click(moveRowUp))
                                     .append($('<a href="#">[Down] </a>').click(moveRowDown))
                                     .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        
        $(currentRow).css('display', 'none');
        //currentRow.appendTo($('#countriesTable')); 
        $('#countriesTable').append(currentRow);
        currentRow.fadeIn(); 
    }

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');

        seedCountry(country.val(), capital.val())
        country.val('');
        capital.val('');
    }

    function moveRowUp() {
        let currentRow = $(this).parent().parent();

        if (currentRow.index() > 2) {
            currentRow.fadeOut(function name() {
                currentRow.insertBefore(currentRow.prev())
                currentRow.fadeIn()
                fixRowLinks();
            });
        }
    }

    function moveRowDown() {
        let currentRow = $(this).parent().parent();

        //if (currentRow.index() < $('#countriesTable tr').length - 1) {
        if (!currentRow.is(':last-child')) {
            currentRow.fadeOut(function name() {
                currentRow.insertAfter(currentRow.next())
                currentRow.fadeIn()
                fixRowLinks();
            });
        }
    }

    function deleteRow() {
        let currentRow = $(this).parent().parent();

        currentRow.fadeOut(function name() {
            currentRow.remove()
            fixRowLinks();
        });
    }

    function fixRowLinks() {
        $('#countriesTable tr a:contains("Up")').css('display', 'inline');
        $('#countriesTable tr a:contains("Down")').css('display', 'inline');

        let firstRow = $('#countriesTable tr')[2];
        $(firstRow).find('a:contains("Up")').css('display', 'none');

        let lastRow = $('#countriesTable tr:last-child');
        $(lastRow).find('a:contains("Down")').css('display', 'none');
    }
}