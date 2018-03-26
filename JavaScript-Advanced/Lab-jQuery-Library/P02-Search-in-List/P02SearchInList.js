function search() {
    let neededWord = $('#searchText').val();
    let liElement = $(`#towns > li:contains(${neededWord})`).css('font-weight', 'bold');
    let notContains = $(`#towns > li:not(:contains(${neededWord}))`).css('font-weight', 'normal');
    
    $('#result').text(`${liElement.length} matches found.`)
}
