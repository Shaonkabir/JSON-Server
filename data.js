// Genarating Data from faker
var faker = require('faker')
var fs = require('fs')

const user = [];

for(var i = 0; i < 50; i++) {
    const obj = {};
    obj.name = faker.name.findName();
    obj.email = faker.internet.email();
    obj.phone = faker.phone.phoneNumber();

    user.push(obj);
}

// Storing the json files:
fs.writeFile('db.json', JSON.stringify(user),(err,data) => {
	console.log('db.json is successfully created');
})

// for Accessing the JSON data from file:
var usersData = fs.readFileSync('db.json').toString();
var parsedData = JSON.parse(usersData);

console.log(parsedData);