handlers.loginGet = function (ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
        singInInfo: './templates/forms/singInInfo.hbs'
    }).then(function () {
        this.partial('./templates/forms/loginForm.hbs')
    });
}