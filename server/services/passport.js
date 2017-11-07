const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google_client_id,
      clientSecret: keys.google_client_secret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);
      console.log('Profile:', profile);
    }
  )
);
