const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '5b8d6816cf9b2e19909e37c9'}).then((todo) => {
	console.log(todo);
});

// Todo.findByIdAndRemove('5b8d673fcf9b2e19909e37c8').then((todo) => {
// 	console.log(todo);
// });

