handlers.loginPost = function (ctx) {
    let username = ctx.params.username;
    let password = ctx.params.passwd;


    auth.login(username, password)
        .then((userData) => {
            auth.saveSession(userData);
            ctx.redirect('#/');
        })
        .catch(console.error);
}