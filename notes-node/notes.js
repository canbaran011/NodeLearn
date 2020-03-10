// console.log('starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
} catch (e) {}
return [];
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body)  => {
var notes = fetchNotes();
var note = {
    title, 
    body
};

var duplicateNotes = notes.filter((note) => note.title === title);
if (duplicateNotes.length === 0 ){
  notes.push(note);
  saveNotes(notes); //calls new function
  return note;
}
};

var getAll = () => { //listing all things in the JSON file.
return fetchNotes();  
};

var readNote = (title) => {
// fetch // filter //return 
var notes = fetchNotes();
var filteredNotes = notes.filter((note) =>note.title === title);
return filteredNotes[0];
};

var removeNote = (title) => {
//filter notes
var notes = fetchNotes();
 var filteredNotes = notes.filter((note) => note.title !== title);
saveNotes(filteredNotes);
//fetch the notes , removing the one with title
//save new notes array
return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
//debugger;
      console.log('--');
      console.log(`Title ${note.title}`);
      console.log(`Body : ${note.body} `);
};


//define entire object
module.exports = {
addNote,  // addNote : addNote as the same // adds new notes
getAll,   
readNote,
removeNote,
logNote
};


//console.log(module);

//module.exports.age = 25;

/* module.exports.addNote = () => {
    console.log('addNote');
    return 'new note'

}; */
/* 
module.exports.add = (a, b) => {
return a+b; 
} */