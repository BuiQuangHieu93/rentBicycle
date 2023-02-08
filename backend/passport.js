const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "58823861057-tbrmvu9ioqc5hni6h8o8o1h1lfsp40qf.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "79190f044366e71568b0";
const GITHUB_CLIENT_SECRET = "6688e42e0f6ff3749d1f7eed54a66551e9b8c2a4";

const FACEBOOK_APP_ID = "517322513649302";
const FACEBOOK_APP_SECRET = "7de8578213aa853ab5a9d4c20d83b209";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});