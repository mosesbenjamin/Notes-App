const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOption =  {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note',{
        title: titleOption
    })
    .command('remove', 'Remove a note',{
        title: titleOption
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    }else {
        console.log('Note title taken')
    }
}else if (command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`)
    allNotes.forEach(note => notes.logNote(note))
}else if (command === 'read'){
    const filteredNote = notes.getNote(argv.title)
    if(filteredNote){
        console.log('Note found');
        notes.logNote(filteredNote);
    }else {
        console.log('Note not found');
    }
}else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? ' Note removed': 'Note not found';
    console.log(message);
}else {
    console.log('Command not recognized');
}
