function showView(viewName) {
    $('main > section').hide() // Hide all views
    $('#' + viewName).show() // Show the selected view only
}

function showHideMenuLinks() {
    $("#linkHome").show()
    if (sessionStorage.getItem('authToken') === null) { // No logged in user
        $("#linkLogin").show()
        $("#linkRegister").show()
        $("#linkListAds").hide()
        $("#linkCreateAd").hide()
        $("#linkLogout").hide()
        //$('#loggedInUser').text('')
    } else { // We have logged in user
        $("#linkLogin").hide()
        $("#linkRegister").hide()
        $("#linkListAds").show()
        $("#linkCreateAd").show()
        $("#linkLogout").show()
        //$('#loggedInUser').text("Welcome, " + sessionStorage.getItem('username') + "!")
    }
}

function showHomeView() {
    showView('viewHome')
}

function showLoginView() {
    $('#formLogin').trigger('reset')
    showView('viewLogin')
}

function showRegisterView() {
    $('#formRegister').trigger('reset')
    showView('viewRegister')
}

function showListAdView() {
    showView('viewAds')
    $('#ads > table tr:not(:first-child').remove();
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/adverts',
        headers: { 'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken') }
    }).then(function (res) {
        displayPaginationAndBooks(res.reverse())
    }).catch(handleAjaxError)
}

function showCreateAdView() {
    $('#formCreateAd').trigger('reset')
    showView('viewCreateAd')
}

function showInfo(message) {
    let infoBox = $('#infoBox')
    infoBox.text(message)
    infoBox.show()
    setTimeout(function() {
        $('#infoBox').fadeOut()
    }, 3000)
}

function showError(errorMsg) {
    let errorBox = $('#errorBox')
    errorBox.text("Error: " + errorMsg)
    errorBox.show()
}

function loadAdForEdit(ad) {
    showView('viewEditAd')
    let title = $('#formEditAd input[name=title]').val(ad.title);
    //let publisher = sessionStorage.getItem('username')
    let description = $('#formEditAd textarea[name=description]').val(ad.description);
    let price = $('#formEditAd input[name=price]').val(ad.price);
    let dateOfPublishing = $('#formEditAd input[name=datePublished]').val(ad.dateOfPublishing);
    $('#formEditAd input[name=id]').val(ad._id)
    //let data = {title, publisher, description, price, dateOfPublishing}
}