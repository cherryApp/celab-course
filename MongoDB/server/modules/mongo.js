// Connect to MongoDB.
const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost/cavity', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }).then(
        con => console.log('Connection is ready.'),
        err => console.error('Mongoose connection error: ', err)
    );
};

module.exports = {
    connect,
};
