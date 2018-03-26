function getInfo() {
    let id = $('#stopId').val();
    const URL = 'https://judgetests.firebaseio.com/businfo/';

    $.ajax({
        method: 'GET',
        url: URL + id + '.json',
    }).then(handleSuccess).catch(handleError)

    function handleSuccess(res) {
        $('#buses').empty()

        $('#stopName').text(res.name);
        for (const bus in res['buses']) {
            $('#buses').append(
                (`<li>Bus ${bus} arrives in ${res['buses'][bus]} minutes`))
        }
    }
    function handleError(err) {
        $('#stopName').text('Error');
    }
}
