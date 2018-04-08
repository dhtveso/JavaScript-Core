handlers.editAdPost = function (ctx) {
    let id = idForEdit;
    let title = ctx.params.title;
    let description = ctx.params.description;
    let imgPath = ctx.params.imgPath;
    let publisher = localStorage.getItem('username');
    let datePublished = ctx.params.datePublished;
    let price = ctx.params.price;

    crudOperation.editAd(title, description, publisher, imgPath, datePublished, price, id).then(function () {
        ctx.redirect('#/listAds')
    })
}