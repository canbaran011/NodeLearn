var db = require('./db.js');


module.exports.handleSignup = (email, password) => {
    //check if email exist
    db.saveUser({
        email,
        password
    }); //or email:email , password:password

    //save the user to db
    //send welcome email
}