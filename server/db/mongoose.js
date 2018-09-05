var mongoose = require('mongoose');
//setup to use promise. Only need to do once
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
	mongoose: mongoose
}