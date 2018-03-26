class PaymentManager {
    constructor(title) {
        this.title = title;
        this.element = null;
    }

    render(target) {
        this.element = $('<table>')
        let caption = $(`<caption>${this.title} Payment Manager</caption>`)
        let thead = $('<thead>')
        .append($('<tr>')
        .append('<th class="name">Name</th>')
        .append('<th class="category">Category</th>')
        .append('<th class="price">Price</th>')
        .append('<th>Actions</th>'))
        let tbody = $('<tbody class="payments">');
        let tfoot = $('<tfoot class="input-data">')
                    .append($('<tr>')
                    .append('<td><input name="name" type="text"></td>')
                    .append('<td><input name="category" type="text"></td>')
                    .append('<td><input name="price" type="number"></td>')
                    .append($('<td>').append($(`<button>Add</button>`).on('click', this._add.bind(this)))));

        this.element.append(caption)
        .append(thead)
        .append(tbody)
        .append(tfoot)
        $('#' + target).append(this.element)
    }

    _add() {
        let name = $(this.element).find('.input-data').find('input[name="name"]')[0]
        let category = $(this.element).find('.input-data').find('input[name="category"]')[0]
        let price = $(this.element).find('.input-data').find('input[name="price"]')[0]
        if (name.value !== '' && category.value !== '' && price.value !== '') {
        $(this.element.find('.payments'))
        .append($('<tr>')
        .append(`<td>${name.value}</td>`)
        .append(`<td>${category.value}</td>`)
        .append(`<td>${Number(price.value)}</td>`)
        .append($('<td>').append($(`<button>Delete</button>`).on('click', this._delete)))).appendTo(this.element);
        name.value = '';
        category.value = '';
        price.value = '';
        }
    }

    _delete(){
        $(this).parent().parent().remove();
    }
}