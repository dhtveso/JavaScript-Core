const URL = 'https://phonebook-d21b6.firebaseio.com/phonebook'
const name = $('#person');
const phonePerson = $('#phone');

$('#btnLoad').on('click', loadData)
$('#btnCreate').on('click', postData)

function loadData() {
    $('#phonebook').empty()

    $.ajax({
        method: 'GET',
        url: URL + '.json'
    }).then(handleSuccess).catch(handleError)

    function handleSuccess(res) {
        for (const key in res) {
            generateLi(res[key].person, res[key].phone, key)
        }
    }
}

function postData() {
    let person = name.val()
    let phone = phonePerson.val()
    let postData = {person, phone}

    $.ajax({
        method: 'POST',
        url: URL + '.json',
        data: JSON.stringify(postData),
        success: appendElement,
        error: handleError
    })

    function appendElement(res) {
        generateLi(person, phone, res.name)
    }

    name.val('')
    phonePerson.val('')
}

function generateLi(person, phone, key) {
    let li = $(`<li>${person}: ${phone} </li>`)
                .append($('<button>[Delete]</button>').on('click', function () {
                    $.ajax({
                        method: 'DELETE',
                        url: URL + '/' + key + '.json'
                    }).then(function () {
                        $(li).remove()
                    })
                        .catch(handleError)
                }));

            $('#phonebook').append(li)
}

function handleError(err) {
    console.log(err);
}