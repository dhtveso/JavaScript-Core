handlers.listAds = function (ctx) {
    crudOperation.listAds().then((res) => {
        ctx.ads = res;
        ctx.isAuth = auth.isAuth();

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            navigation: './templates/common/navigation.hbs',
            footer: './templates/common/footer.hbs',
            pagination: './templates/list/pagination.hbs',
        }).then(function () {
            this.partial('./templates/list/viewAds.hbs').then(function (res) {
                allAds = ctx.ads
                display.displayPaginationAndBooks(ctx.ads)
            })
        })
    }).catch(function (err) {
        display.handleAjaxError(err)
    })
}