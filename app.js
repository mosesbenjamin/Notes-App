console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


// console.log(_.isString(true));
// console.log(_.isString('Mavewrick'));

var filteredArray = _.uniq(['1', 1, 2,3, 2, "1", 0]);
console.log(filteredArray)

// var res = notes.add(1, 8);
// console.log(res)

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}. I'm ${notes.age}`);