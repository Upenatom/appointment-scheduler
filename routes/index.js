var express = require("express");
var router = express.Router();
const passport = require("passport");
const homeCtrl = require("../controllers/home");

/* GET home page. */
router.get("/", homeCtrl.home);

//Login/sign up route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//AFTER user signs in with Google
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/cars", //redirect to customer dashboard
    failureRedirect: "/", //redirect to home page
  })
);

//Logout route  **Async function**
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
