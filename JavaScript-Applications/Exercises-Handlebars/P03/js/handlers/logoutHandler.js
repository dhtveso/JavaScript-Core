handlers.logout = function (ctx) {
    auth.logout().then(() => {
        localStorage.clear();
        ctx.redirect('#/')
    }).catch(console.error);
}