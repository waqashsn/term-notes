const fs = require("fs");
const chalk = require("chalk");
// const yargs = require('yargs');

const addNote = function (title, body) {
    // get exiting notes
    const notes = getNotes();

    const note = {
        date_time: new Date(),
        title: title,
        body: body,
    };
    // append new note to existing notes
    notes.push(note);
    // stringify notes object
    const notes_json = JSON.stringify(notes);
    // write to notes.json file
    fs.writeFileSync('./notes.json', notes_json);
    console.log(chalk.green("New note added!"));

};

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


module.exports = {
    addNote: addNote,
    getNotes: getNotes
}