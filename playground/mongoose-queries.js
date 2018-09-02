const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b8c64d98b43bd01c44d042c11';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}

// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5b87041666137b268c3874fe'

User.findById(userId).then((user) => {
	if(!user){
		return console.log('user id not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
})