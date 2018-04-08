handlers.createAdGet = function (ctx) {
    ctx.isAuth = auth.isAuth();

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
        createEditInfo: './templates/forms/createEditInfo.hbs'
    }).then(function () {
        this.partial('./templates/forms/createAd.hbs')
    });
}