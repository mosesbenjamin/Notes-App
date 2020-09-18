var person = {
    name: 'Mavewrick'
};

person.age = 20;

debugger;

person.name = 'Dave';

console.log(person)


// Debug commands
//Via CLI- Run : node/nodemon inspect [name of app].js 
//Via Chrome- Run: node/nodemon --inspect-brk [name of app].js 
//And place the "debugger" key word where you wish to debug(use c, to continue)