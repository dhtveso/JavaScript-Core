handlers.createAdPost = function (ctx) {
    let title = ctx.params.title;
    let description = ctx.params.description;
    let publisher = localStorage.getItem('username');
    let imgPath = ctx.params.imgPath;
    let datePublished = ctx.params.datePublished;
    let price = ctx.params.price;

    crudOperation.createAd(title, description, publisher, imgPath, datePublished, price).then(function () {
        ctx.redirect('#/listAds')
    })
}