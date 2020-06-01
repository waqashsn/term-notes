const fs = require("fs");
const chalk = require("chalk");
// const yargs = require('yargs');

// function to add new note; takes in title and both of the note
const addNote = function (title, body) {
    console.log("Trying to add with title...", title)
    // get exiting notes
    const notes = getNotes();

    // first see if a note with same title exits; if not, add the new note
    same_titles = notes.filter(function(note){
        return title === note.title
    })
    // if there are no notes with same title, add note
    if(same_titles.length === 0){
        
        const note = {
            date_time: new Date(), // timestamp for the note
            title: title,
            body: body,
        };
        // append new note to existing notes
        notes.push(note);
        // stringify notes object
        const notes_json = JSON.stringify(notes);
        // write to notes.json file
        fs.writeFileSync('./notes.json', notes_json);
        console.log(chalk.green.inverse.bold("DONE!"), chalk.green(`New note with title "${chalk.underline(title)}" added!`));
    } else {
        console.log(chalk.white.inverse.bold("ERROR!"), chalk.red(`Another note with same title ("${chalk.underline(title)}") exists. Please use a different title.`))
    }
};

// function to get all notes in notes.json file (database)
const getNotes = function () {
    try {
        // this part runs if there is an existing note.json file
        // read file notes.json file
        const notes_data_buffer = fs.readFileSync("./notes.json");
        // convert data buffer to json
        const notes_data_json = notes_data_buffer.toString();
        // convert data to object; has to be array of note objects
        return JSON.parse(notes_data_json);
    } catch (error) {
        // if notes.json file not found, return empty array
        return []
    }
};

// function to remove a note; takes in title of the note
const removeNote = function(title){
    // first get all notes from notes.json file
    const notes = getNotes();
    // check if there are any notes; if yes, find and delete the given note
    if(notes.length != 0){
        // filter out the note to be deleted, updated_notes contains all notes except the note to be deleted
        const updated_notes = notes.filter(function(note){
            // keep those notes whose title does not match given note
            return title != note.title
        });
        // check if a note was deleted or not (becuase note to be deleted was not found)
        if(notes.length != updated_notes.length){
            const notes_json = JSON.stringify(updated_notes);
            // write to notes.json file
            fs.writeFileSync('./notes.json', notes_json);
            console.log(chalk.green.inverse.bold("DONE!"), chalk.green(`Requested note deleted! (had title "${chalk.underline(title)}")`));
        } else {
            console.log(chalk.red.inverse.bold("ERROR!"), chalk.red(`No note with given title "${chalk.underline(title)}" found.`));
        }
    } else {
        console.log(chalk.red.inverse.bold("ERROR!"), chalk.red("There are no notes in your notebook."))
    }
}


module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}