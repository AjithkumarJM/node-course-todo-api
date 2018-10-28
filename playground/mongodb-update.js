const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // findOneAndUpdate(filter, update, options, delete)
    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectId('5bd569bc1a104c40e45e4f86')
        }, {
            $set: {
                text: "to drink coffee"
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log(result)
        });

    // client.close();

}); 