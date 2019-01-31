'use strict';

module.exports = (WS) => {
    let isLoggedIn = (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect(WS.config.loginFailureRedirect);
    };

    WS.router.get('/index', (req, res) => {
        res.render('index', {
            user: req.user
        });
        res.end();
    });

    WS.router.get('/contact', (req, res) => {
        res.render('contact', {message: req.flash('loginMessage')});
        res.end();
    });

    WS.router.get('/about', (req, res) => {
        res.render('about', {
            user: req.user
        });
        res.end();
    });

    WS.router.get('/work', (req, res) => {
        res.render('work', {
            user: req.user
        });
        res.end();
    });
};
