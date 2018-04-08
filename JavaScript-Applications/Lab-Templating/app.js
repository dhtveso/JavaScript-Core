$(() => {
    let details;
    let data;

    async function loadFiles() {
        let contacts = await $.get('templates/contacts.html');
        let contactsTemplate = Handlebars.compile(contacts);

        details = await $.get('templates/details.html');
        data = await $.get('data.json');
        let obj = {
            contacts: data
        }
        let table = contactsTemplate(obj);
        console.log(table);

        $('#list').append(table);
        attachEvents();
    }
    loadFiles()
    function attachEvents() {
        $('.contact').on('click', function () {
            loadDetails($(this).attr('data-id'));
            $(this).attr('active')
        })
    }

    function loadDetails(index) {
        $('#details').empty();
        let detailsTemplate = Handlebars.compile(details);
        let html = detailsTemplate(data[index]);
        $('#details').append(html)
    }
});