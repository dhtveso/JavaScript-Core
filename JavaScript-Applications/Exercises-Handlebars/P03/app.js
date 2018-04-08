const handlers = {};
let allAds = [];
let idForEdit;

$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.get('#/', handlers.homeHandler);
        this.get('#/register', handlers.registerHandler);
        this.post('#/register', handlers.registerPost)
        this.get('#/login', handlers.loginGet)
        this.post('#/login', handlers.loginPost);
        this.get('#/logout', handlers.logout);
        this.get('#/createad', handlers.createAdGet);
        this.post('#/createad', handlers.createAdPost);
        this.get('#/edit/:id', handlers.editAdGet);
        this.post('#/edit/', handlers.editAdPost);
        this.get('#/delete/:id', handlers.deleteAd);
        this.get('#/listAds', handlers.listAds);
        this.get('#/:id', handlers.listSingleAd);
    });

    app.run();
});