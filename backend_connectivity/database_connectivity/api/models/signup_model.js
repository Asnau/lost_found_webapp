const mongoose = require('mongoose');

const SignUpSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: String,
    last_name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Signup', SignUpSchema);