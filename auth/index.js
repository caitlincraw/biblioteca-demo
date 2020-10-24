const express = require('express');
const router = express.Router();
const passport = require('passport');

//ROUTE CALLED WHEN WANT TO LOGIN
router.get('/auth/github', (req, res) => {
    res.send("You are trying to login")
    }
);

// //GITHUB CALLBACK URL
// router.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/'}), (req, res) => {
//     alert('You logged in');
//     res.redirect('/');
// })

// //ROUTE CALLED WHEN WANT TO LOGIN
// router.get('/auth/github', passport.authenticate('github'));

// //ROUTE CALLED WHEN WANT TO LOGOUT
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });

module.exports = router;