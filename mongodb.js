// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('5dc87695cc4143189855034f') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 50 }).toArray((error, users) => {       
    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5dc874b59da0f51f886f9180") }, (error, task) => {
        console.log(task)        
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})