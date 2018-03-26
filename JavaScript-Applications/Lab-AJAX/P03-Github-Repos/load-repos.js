function loadRepos() {
    $('#repos').empty();
    const URL = `https://api.github.com/users/`;

    $.ajax({
        method: 'GET',
        url: URL + $('#username').val() + `/repos`,
        success: handleSuccess,
        error: handleError
    })

    function handleSuccess(res) {
        for (const repo of res) {
            let li = $(`<li>`).append($(`<a href="${repo.html_url}">${repo.full_name}</a>`));
            $('#repos').append(li);
        }
        
    }

    function handleError(err) {
        let li = $(`<div style="color: #D8000C; background-color: #FFD2D2;">Incorect username</div>`);
            $('#repos').append(li);
    }
}