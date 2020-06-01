// const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const utils = require('./utils')
// console.log(chalk.red("Hello"))

// yargs command for 'add' command to add new note
yargs.command({
    command: 'add',
    describe: 'Add new note',
    handler: function(argv) {
        console.log(chalk.blue.bold("Adding new note..."));
        utils.addNote(argv.title, argv.body);
    },
    builder: {
        title: {
            describe: 'Title of the new note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the new note',
            demandOption: true,
            type: 'string'
        }
    }
})

// yargs command for 'list' command to list all existing notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log("Listing all notes...")
    }
})

// yargs command for 'remove' command to remove a note
yargs.command({
    command: 'remove',
    describe: 'remove',
    handler: function(argv) {
        console.log("Listing all notes...");
        utils.removeNote(argv.title);
    },
    builder: {
        title: {
            describe: "Title of the note to be removed",
            demandOption: true,
            type: 'string'
        }
    }
})


// parse yargs commands
yargs.parse();