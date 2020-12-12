import FacebookTokenStrategy from 'passport-facebook-token';
import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';
import config from './auth';

const OAuthCallback = (accessToken, refreshToken, profile, cb) => {
  const user = {
    username: profile.displayName,
    email: profile.emails[0].value,
    isverified: true
  };
  return cb(null, user);
};

passport.use('facebook-token', new FacebookTokenStrategy({
  name: 'facebook',
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  profileFields: ['id', 'displayName', 'photos', 'email']
}, OAuthCallback));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new GoogleStrategy.Strategy({
    name: 'google',
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: '/api/v1/users/auth/google/callback'
  }, OAuthCallback)
);

export default passport;
