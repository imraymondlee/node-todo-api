var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var {ObjectID} = require('mongodb');

var app = express();
var port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})

});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});

});


app.delete('/todos/:id', (req, res) => {
	//get the id
	var id = req.params.id;

	//validate the id -> not valid? return 404
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.status(200).send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
	//remove todo by id
		//success
			//if no doc, send 404
			//if doc, send doc back with 200
		//error
			//400 with empty body
});

app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {
	app: app
}