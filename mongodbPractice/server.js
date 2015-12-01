var mongojs = require('mongojs');
var db = mongojs('acme'); //database (1st level)

// db.employees.find(); //collections of information (2nd level)
// db.products.find(); //collection
// db.suppliers.find(); //collection
// db.locations.find(); //collection
// db.customers.find(); //collection
// db.orders.find(); //collection

var employees = db.collection('employees');

//will insert a new instance of this object every time file is saved
// employees.insert({ 
	// name: 'Dominique Liau',
	// age: 23,
	// status: 'active',
	// title: 'Developer',
// })

// employees.insert({ 
// 	name: 'Wile E. Coyote',
// 	age: 87,
// 	status: 'plotting',
// 	title: 'Hunter',
// })

// employees.insert({ 
// 	name: 'Barack Obama',
// 	age: 57,
// 	status: 'inactive',
// 	title: 'General Manager',
// })

//CRUD

//FIND employees and stick them into an array
//if {} is empty it will list all employees.
//else {name: "Wile E. Coyote"} will do a search 
//searching by _id is special: {_id: mongojs.ObjectId('565dd265b80b2e6329f4dcd0')}
// employees.find({_id: mongojs.ObjectId('565dd265b80b2e6329f4dcd0')} , function(err, results) {
// 	console.log(results);
// })

//FIND & SORT
//ascending: value of 1, descending: value of -1: {age: 1}
//You can find for only certain data, e.g. only return names
// employees.find({}).sort({age:1}, function(err, results) {
// 	console.log(results);
// })


//FIND & SORT & LIMIT
//note the number of items we want returned. 
//combining limit with skip helps with pagination
//
// employees.find({}).sort({age:1}).limit(2).skip(1, function(err, results) {
// 	console.log(results);
// })

//finds one and returns as an object
// employees.findOne({_id: mongo.js.ObjectId("")}...)

//change data
//$set: update a field
//$inc: increment operator
//.upsert: update data, but if it doesn't find the data then it will create it
//.remove: delete objects that match a criteria, CAREFUL: you might want to terminate or remove a user, but not completely remove them from the database. ALWAYS remove by id.
employees.update({_id: mongojs.ObjectId('565dd265b80b2e6329f4dcd0')}, {$set: {name: 'Teddy Roosevelt'}}, {$inc: {age:1}} , function(err, results) {
	console.log(results);
});
