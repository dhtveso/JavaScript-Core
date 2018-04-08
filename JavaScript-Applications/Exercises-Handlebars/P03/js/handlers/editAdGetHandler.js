handlers.editAdGet = function (ctx) {
    let publisher = allAds.find(x => x._id == ctx.params.id);
    // console.log(publisher);

    // console.log(localStorage.getItem('username'));

    // ctx.isAuthor = localStorage.getItem('username') === publisher.publisher;

    let currentAts = allAds.find(x => x._id == ctx.params.id);
    idForEdit = ctx.params.id;
    ctx.isAuth = auth.isAuth();
    ctx.title = currentAts.title;
    ctx.description = currentAts.description;
    ctx.imgPath = currentAts.imgPath;
    ctx.datePublished = currentAts.datePublished;
    ctx.price = currentAts.price;

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        navigation: './templates/common/navigation.hbs',
        footer: './templates/common/footer.hbs',
        createEditInfo: './templates/forms/createEditInfo.hbs'
    }).then(function () {
        this.partial('./templates/forms/editad.hbs')
    });
}