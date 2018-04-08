function attachEvents() {
    $('#btnLoadTowns').on('click', function () {
        $('li').remove()
        let towns = $('#towns').val().split(', ');
        let a = []

        for (const town of towns) {
            a.push({ 'townName': town })
        }
        towns = a;

        async function loadFiles() {
            let town = await $.get('templates/listTown.hbs');
            let townTemplate = Handlebars.compile(town);
            let obj = {
                towns: towns
            }
            let table = townTemplate(obj);

            $('#root').append(table);
        }
        loadFiles()
    })
}