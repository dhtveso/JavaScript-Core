function increment(root) {
    let currentRoot = $(root);
    currentRoot.append($('<textarea>').addClass('counter').attr('disabled', true).val(0));
    currentRoot.append($('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment'));
    currentRoot.append($('<button>').addClass('btn').attr('id','addBtn').text('Add'))
    currentRoot.append($('<ul>').addClass('results'))

    $('#incrementBtn').on('click', function () {
        let textarea = $('textarea');
        textarea.val(Number(textarea.val()) + 1)
    })

    $('#addBtn').on('click', function () {
        let list = $('.results').append($('<li>').text($('textarea').val()))
        console.log(list);
        
    })
}