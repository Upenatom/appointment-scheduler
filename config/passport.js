const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Customer = require("../models/customer");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      // a user has logged in with OAuth...
      Customer.findOne({ googleId: profile.id }, function (err, customer) {
        if (err) return cb(err);
        if (customer) {
          return cb(null, customer);
        } else {
          // we have a new customer via OAuth!
          var newCustomer = new Customer({
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newCustomer.save(function (err) {
            if (err) return cb(err);
            return cb(null, newCustomer);
          });
        }
      });
    }
  )
);

passport.serializeUser(function (customer, done) {
  done(null, customer.id);
});
passport.deserializeUser(function (id, done) {
  Customer.findById(id, function (err, customer) {
    done(err, customer);
  });
});
