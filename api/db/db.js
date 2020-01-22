require('dotenv').config();
const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

const db = mongoose.connect(DATABASE_URL, options)
mongoose.Promise = global.Promise;

const retry_mongoose = () => {
    return mongoose.connect(DATABASE_URL, options)
}

mongoose.connection.on("connected", function() {
    console.log("Mongodb is connected");
});

mongoose.connection.on("disconnected", function() {
    console.log("Mongodb is disconnected");
    setTimeout(retry_mongoose, 3000)
});

mongoose.connection.on("error", function(err) {
    // console.log(err);
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('App termination (SIGINT)', function() {
        process.exit(0);
    });
});

require("./schema/contact.js")

module.exports = db
