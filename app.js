console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var res = notes.add(1, 8);
console.log(res)

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}. I'm ${notes.age}`);