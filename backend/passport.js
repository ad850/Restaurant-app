const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const passport = require("passport")

const GOOGLE_CLIENT_ID = "424490657472-ava7li73p0krs8g0mogotav6mn685r3o.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID ="19240958077f6790b753"
const GITHUB_CLIENT_SECRET="5eb52c2e440ca4496c8ea4f7ab6e0620c0cce0ee"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   
    done(null,profile)

  }
));
passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID ,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   
    done(null,profile)

  }
));

passport.serializeUser((user,done)=>{


    done(null,user)
})
passport.deserializeUser((user,done)=>{


    done(null,user)
})