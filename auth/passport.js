const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const User = require('../models')['User']

// Setting up Passport and the passport strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: process.env.GH_CALLBACK
  },

  // Returns a user profile after someone logs into github
  async function(accessToken, refreshToken, profile, cb) {
    console.log("****PROFILE\n" + JSON.stringify(profile))
    
    // SAVE USER TO DB OR SKIP IF ALREADY IN DB
    let user = await User.findOne({where: { gitHubID: parseInt(profile.id) }})

    if(!user) {
      user = await User.build({
        gitHubID: parseInt(profile.id),
        gitHubUsername: profile.username,
        createAt: new Date(),
        updatedAt: new Date()
      })
      await user.save();
    }
    // Tell passport to move on and attach "user" object to the session
    cb(null, user)
  }
));

//COPIED THIS FROM HW... NEED TO UNDERSTAND WHAT IS HAPPENING HERE
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    const user = await User.findByPk(id)
    done(null, user);
});


module.exports = passport