const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    bd: Date,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
