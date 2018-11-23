'use strict';

module.exports = (WS) => {
    let isLoggedIn = (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect(WS.config.loginFailureRedirect);
    };

    WS.router.get('/', (req, res) => {
        res.render('index', {
            user: req.user
        });
        res.end();
    });

    WS.router.get('/login', (req, res) => {
        res.render('login', {message: req.flash('loginMessage')});
        res.end();
    });

    WS.router.get('/signup', isLoggedIn, (req, res) => {
        res.render('signup', {
            user: req.user,
            message: req.flash('signupMessage')});
        res.end();
    });

    WS.router.get('/admin', isLoggedIn, (req, res) => {
        res.render('admin', {
            user: req.user
        });
    });
};
