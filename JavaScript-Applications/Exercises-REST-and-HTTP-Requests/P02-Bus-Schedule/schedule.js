function solve() {
    departButton = $('#depart').on('click', depart)
    arriveButton = $('#arrive').on('click', arrive)
    let infoBox = $('.info');
    const URL = 'https://judgetests.firebaseio.com/schedule/';
    let arrivedAt = 'depot';
    let nextStop = 'depot';

    function depart() {
        $.ajax({
            method: 'GET',
            url: URL + nextStop + '.json',
            success: handleSuccessDepart,
            error: handleError
        });
        departButton.prop('disabled', true);
        arriveButton.prop('disabled', false);
    }

    function arrive() {
        infoBox.text(`Arriving at ${arrivedAt}`)
        departButton.prop('disabled', false);
        arriveButton.prop('disabled', true);
    }

    function handleSuccessDepart(res) {
        infoBox.text(`Next stop ${res.name}`)
        arrivedAt = res.name;
        nextStop = res.next;
    }

    function handleError(err) {
        infoBox.text('Error')
        departButton.prop('disabled', true);
        arriveButton.prop('disabled', true);
    }


    return {
        depart,
        arrive
    };
}
let result = solve();