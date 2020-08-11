const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

// fruit.save();
Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  }else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

  }
});

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);


const person = new Person({
  name: "Niklas",
  age: 26

});

Person.updateOne({_id: "5f106fe16c74c5530cb4e657"}, {favouriteFruit: fruit}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Documnet Succesfully Updated!");
  }
});
// person.save(function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(person);
//   }
// });

// Person.deleteMany({name: "Niklas"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted records!");
//   }
// });







const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
