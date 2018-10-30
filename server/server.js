const express = require('express');
const bodyParser = require('body-parser');
var { ObjectId } = require('mongodb');

const { mongoose } = require('./db/moongose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos,
            status: 200
        })
    }, (e) => {
        if (e) {
            res.status(400).send(e)
        }
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // res.send(req.params);
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'Id is invalid'
        });
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(400).send({
                message: `no todo find on this id ${id}`,
            });
        }

        res.send({
            todo,
            status: 200
        })
    }).catch((e) => {
        if (e) {
            res.status(400).send({
                message: `no todo find on this id ${id}`,
            });
        }
    })
})

app.listen(port, () => {
    console.log(`server started at ${port}`);
});

module.exports = {
    app
}