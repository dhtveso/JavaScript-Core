$(() => {
    renderCatTemplate();

    function renderCatTemplate() {

        async function loadFiles() {
            let cat = await $.get('templates/singleCat.hbs');
            let catTemplate = Handlebars.compile(cat);
            let data = window.cats;
            let obj = {
                cats: data
            }
            let table = catTemplate(obj);

            $('#allCats').append(table);
            attachEvents();
        }
        loadFiles()

        function attachEvents() {
            $('.btn-primary').on('click', function (arg) {
                let p = $(this).parent().find('div');

                if ($(p).css('display') === 'inline') {
                    $(p).css('display', 'none')
                    $(this).text('Show status code')
                } else {
                    $(p).css('display', 'inline')
                    $(this).text('Hide status code')
                }
            })
        }
    }

})
