function extractText() {
    let liValues = $('#items li').toArray().map(li => $(li).text());

    $('#result').text(liValues.join(', '));
}
