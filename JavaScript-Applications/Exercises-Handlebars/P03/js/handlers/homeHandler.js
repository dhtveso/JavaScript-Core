handlers.homeHandler = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
    }).then(function () {
        this.partial('./templates/welcome.hbs')
    });
};