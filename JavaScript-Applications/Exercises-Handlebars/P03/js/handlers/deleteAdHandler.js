handlers.deleteAd = function (ctx) {
    let id = ctx.params.id;
    crudOperation.deleteAd(id).then((res) => {
        ctx.redirect('#/listAds');
    }).catch(console.error)
}