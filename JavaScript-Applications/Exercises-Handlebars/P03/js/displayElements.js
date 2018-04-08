let display = (() => {
    const ADS_PER_PAGE = 4;

    function displayPaginationAndBooks(adverts) {
        let pagination = $('#pagination-demo')
        if (pagination.data("twbs-pagination")) {
            pagination.twbsPagination('destroy')
        }
        pagination.twbsPagination({
            totalPages: Math.ceil(adverts.length / ADS_PER_PAGE),
            visiblePages: 5,
            next: 'Next',
            prev: 'Prev',
            onPageClick: function (event, page) {
                $('#ads>div').remove();
                let startad = (page - 1) * ADS_PER_PAGE
                let endad = Math.min(startad + ADS_PER_PAGE, adverts.length)
                $(`a:contains(${page})`).addClass('active')
                let data = []
                for (let i = startad; i < endad; i++) {
                    data.push(adverts[i]);
                }

                loadFiles(data)
            }
        })
    }

    async function loadFiles(ads) {
        ads.filter(x => x.publisher === localStorage.getItem('username'))
            .map(a => a.isAuthor = true);

        let obj = {
            'ads': ads
        }

        let advs = await $.get('./templates/list/listAds.hbs');
        let adsTemplate = Handlebars.compile(advs);
        let table = adsTemplate(obj);
        $('#ads').append(table);
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response)
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error."
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description
        showError(errorMsg)
    }

    function showInfo(message) {
        let infoBox = $('#infoBox')
        infoBox.text(message)
        infoBox.show()
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function showError(errorMsg) {
        let errorBox = $('#errorBox')
        errorBox.text("Error: " + errorMsg)
        errorBox.show()
    }

    return {
        displayPaginationAndBooks,
        handleAjaxError,
        showInfo,
        showError
    }

})();