var mongoose = require('mongoose');
//setup to use promise. Only need to do once
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {
	mongoose: mongoose
}