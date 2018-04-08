handlers.listSingleAd = function (ctx) {
    ctx.isAuth;
    let currentAts = allAds.find(x => x._id == ctx.params.id);
    idForEdit = ctx.params.id;
    ctx.isAuth = auth.isAuth();
    ctx.title = currentAts.title;
    ctx.description = currentAts.description;
    ctx.imgPath = currentAts.imgPath;
    ctx.publisher = localStorage.getItem('username');
    ctx.datePublished = currentAts.datePublished;
    ctx.price = currentAts.price;

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/list/listSingleAd.hbs')
    });
}