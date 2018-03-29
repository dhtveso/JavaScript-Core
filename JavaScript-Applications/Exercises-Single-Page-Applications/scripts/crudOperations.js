const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_SykldXKqf' //TODO Add app_key
const APP_SECRET = 'ee5b61123aca4bd8a7470fd2f429b98f' //TODO Add App_secret
const AUTH_HEADERS = { 'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET) }
const ADS_PER_PAGE = 10;

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister input[name=passwd]').val();
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        singInUser(res, 'Registration successful.')
    }).catch(handleAjaxError)
}

function loginUser() {
    let username = $('#formLogin input[name=username]').val();
    let password = $('#formLogin input[name=passwd]').val();

    $.ajax({
        method: 'POST',
        url:  BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        singInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function logoutUser() {
    sessionStorage.clear();
    showHideMenuLinks()
    showHomeView()
    showInfo('Logout successfull')
}

function singInUser(res, message) {
    saveAuthInSession(res)
    showHideMenuLinks()
    showHomeView()
    showInfo(message)
}

function createAd() {
    let title = $('input[name=title]').val();
    let publisher = sessionStorage.getItem('username')
    let description = $('textarea[name=description]').val();
    let price = $('input[name=price]').val();
    let dateOfPublishing = $('input[name=datePublished]').val();
    let data = {title, publisher, description, price, dateOfPublishing}
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/adverts',
        headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') },
        data: data
    }).then(function (res) {
        showListAdView()
        showInfo('Ad created successful.')
    }).catch(handleAjaxError)
}

function deleteAd(ad) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + ad._id,
        headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') }
    }).then(function (res) {
        showListAdView()
        showInfo('Ad deleted.')
    }).catch(handleAjaxError)
}

function editAd() {
    let id = $('#formEditAd input[name=id]').val();
    let title = $('#formEditAd input[name=title]').val();
    let publisher = sessionStorage.getItem('username')
    let description = $('#formEditAd textarea[name=description]').val();
    let price = $('#formEditAd input[name=price]').val();
    let dateOfPublishing = $('#formEditAd input[name=datePublished]').val();
    let data = {title, publisher, description, price, dateOfPublishing}
    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/adverts/' + id,
        headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') },
        data: data
    }).then(function (res) {
        showListAdView()
        showInfo('Ad edited successful.')
    }).catch(handleAjaxError)
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('username', userInfo.username)
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
    sessionStorage.setItem('id', userInfo._id)
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}

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
            $('#ads > table tr:not(:first-child').remove();
            let startad = (page - 1) * ADS_PER_PAGE
            let endad = Math.min(startad + ADS_PER_PAGE, adverts.length)
            $(`a:contains(${page})`).addClass('active')
            for (let i = startad; i < endad; i++) {
                createTr(adverts[i])
            }
        }
    })
}

function createTr(ad) {
    let tr = $('<tr>').append(`<td>${ad.title}`)
                      .append(`<td>${ad.publisher}`)
                      .append(`<td>${ad.description}`)
                      .append(`<td>${ad.price}`)
                      .append(`<td>${ad.dateOfPublishing}`)

            if (ad._acl.creator === sessionStorage.getItem('id')) {
                let td = $('<td>')
                let edit =   $('<a href="#">[Edit]</a>').on('click', function () {
                    loadAdForEdit(ad)
                });
                let deleteATag = $('<a href="#">[Delete]</a>').on('click', function () {
                    deleteAd(ad)
                })

                td.append(edit)
                td.append(deleteATag);
                tr.append(td)
            }

    $('#ads table').append(tr)
}