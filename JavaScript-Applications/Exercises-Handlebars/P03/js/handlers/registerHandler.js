handlers.registerHandler = function (ctx) {
    ctx.isAuth = auth.isAuth();

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
        singInInfo: './templates/forms/singInInfo.hbs'
    }).then(function () {
        this.partial('./templates/forms/registerForm.hbs')
    });
}