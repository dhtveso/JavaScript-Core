//function createBook(selector, title, author, isbn) {
    let createBook = (function () {
        let currentId = 1;
        
        return function create(selector, title, author, isbn) {
            let currentDiv = $(selector).css('border', 'medium none');
            let innerDiv = $(`<div>`).attr('id', `book${currentId++}`)
            innerDiv.append($('<p>').addClass('title').text(title));
            innerDiv.append($('<p>').addClass('author').text(author));
            innerDiv.append($('<p>').addClass('isbn').text(isbn));
            innerDiv.append($('<button>').text('Select').on('click', function () {
                let selectedDiv = $(this).parent();
                selectedDiv.css('border', '2px solid blue')
            }));
            innerDiv.append($('<button>').text('Deselect').on('click', function () {
                let deselectedDiv = $(this).parent();
                deselectedDiv.css('border', 'none');
            }));
            innerDiv.appendTo(currentDiv);
        }
        //return{ create }
    }())
    
    createBook['create'](selector, title, author, isbn);
//}