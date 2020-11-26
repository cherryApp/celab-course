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

// const old = UserModel.findById;
// UserModel.findById = function(id) {
//     console.log(this);
//     return new Promise( function(res, rej) {
//         old.call(this, [id, function(err, doc) {
//             if (err) {
//                 return rej(err);
//             }
//             res(doc);
//         }]);
//     });
// };

module.exports = UserModel;
