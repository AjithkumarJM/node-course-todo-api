const mongoose = require('mongoose');

var Todo = mongoose.model('Todo',
    {
        text: {
            type: String,
            minLength: 1,
            trim: true,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        completedAt: {
            type: Number,
            default: null
        },
        _creator: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    },
);

// var newTodo = new Todo({
//     text: 'cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('saved Todo' + doc)
// }, (e) => {
//     console.log('Unable to save Todo');
// })

module.exports = {
    Todo
}