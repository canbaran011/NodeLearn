// console.log('starting app.js!');
// const os = require('os');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


    const argv =yargs.argv;
    var command = process.argv[2];
  /*   console.log('Command', command);
    // console.log('Process',process.argv);
    console.log('Yargs', argv); */
//---------------------------------------------------------------
if (command === 'add' ) {
    var note = notes.addNote(argv.title, argv.body);
    if (note){
console.log('note created');
notes.logNote(note);

    }
    else{
        console.log('note title taken');
}
}
//----------------------------------------------------------------
else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s). `);
  allNotes.forEach((note) => notes.logNote(note));
 }
 //---------------------------------------------------------------   
 
 else if (command === 'read'){
       var note = notes.readNote(argv.title, argv.body);
       if (note){
           console.log('note found');
         notes.logNote(note);
       }
       else{
           console.log('note not found'); 
       }
    }
 //---------------------------------------------------------------
 
else if(command === 'remove'){
      var noteRemoved = notes.removeNote(argv.title);
      var message = noteRemoved ? 'note was removed' : 'note not found';
      console.log(message);   
    }
 
 //--------------------------------------------------------------
    else {
    console.log('command not recognized')
}



//------------------------------------------------------------------


// console.log(_.isString(true));
// console.log(_.isString('cbg'));
/* 
var filteredArray = _.uniq(['Mike', 1, 'canbaran', 1,2,3,4]);
console.log(filteredArray);
 */
//console.log('result:', notes.add(9,7));
/* var user = os.userInfo();
//console.log(user);
var res = notes.addNote();
console.log(res);
 */

/* fs.appendFileSync('greetings.txt', ` Hello ${user.username}! You are ${notes.age}.`);
//or 
//` Hello ${user.username}!` es6 opt//.. */
