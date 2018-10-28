const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: "eat lunch" }).then((result) => {
    //     console.log(result)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'walk the dog' }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    // client.close();

}); 