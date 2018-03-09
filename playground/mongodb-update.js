//const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a9e9f92603247b132eaa8e4')
  // },{
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOrginal: false
  // }).then((result) => {
  //   console.log(result);
  // })


  db.collection('Users').findOneAndUpdate({
    name: 'Big Daddy'
  }, {
    $set: {
      name: 'Bigdaddygamming'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOrginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
