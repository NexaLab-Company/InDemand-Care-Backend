const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db/DBConnection')
const bcrypt = require('bcrypt');

const customFields = {
    usernameField: 'email',
}

const verifyFunction = (email, password, done) => {
    const query = 'SELECT * FROM users WHERE email = ? ';

    db.query(query, [email], (error, results) => {
        if (error) {
            return done(error)  // error handle
        } else {
            if (results.length === 0) {
                callback(null, false);  //user not found 
            } else {
                bcrypt.compare(password, results[0].password, (err, res) => {
                    if (err) {

                        return done(err)  // error handle

                    }
                    if (res) {
                        // Passwords match, authentication successful
                        return done(null, results[0]);
                    } else {
                        // Passwords do not match, authentication failed
                        return done(null, false);
                    }
                })
            }
        }
    })
}




const strategy = new LocalStrategy(customFields, verifyFunction);
module.exports = function (passport) {
    passport.use(strategy);

    passport.serializeUser((user, done) => {
        done(null, user.id)

    })


      // Deserialize the user ID from the session and fetch the user data from the database
      passport.deserializeUser(function(id, done) {
        db.query('SELECT * FROM users WHERE id = ?', [id], function (error, results, fields) {
          if (error) { return done(error); }
          done(null, results[0]);
        });
      });
}
