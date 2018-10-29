const mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        minLength: 1,
        trim: true,
        required: true
    }
})

// var user = new User({
//     email: 'ajithkumarjm@gmail.com'
// })

// user.save().then((doc) => {
//     console.log('user saved' + doc)
// }, (e) => {
//     console.log('unable to save user', e);
// })

module.exports = {
    User
}