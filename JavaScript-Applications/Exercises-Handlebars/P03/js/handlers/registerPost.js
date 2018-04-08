handlers.registerPost = function (ctx) {
    let username = ctx.params.username;
    let password = ctx.params.passwd;

    auth.register(username, password).then((userdata) => {
        auth.saveSession(userdata);
        ctx.redirect('#/');
    }).catch(console.error);
}