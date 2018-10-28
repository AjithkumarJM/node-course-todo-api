// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

// var objId = new ObjectId;
// console.log(objId)

// var user = { name: 'ajith', age: 23 };
// var { name } = user;
// console.log(name); // prints ajith

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Arun',
    //     age: 23,
    //     location: 'Tamilnadu, Madurai'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert users', err)
    //     }

    //     // console.log(JSON.stringify(result.ops, undefined, 2))
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // })
    client.close();

}); 