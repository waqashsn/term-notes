const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
// console.log(chalk.red("Hello"))

// yargs command for 'add' command to add new note
yargs.command({
    command: 'add',
    describe: 'Add new note',
    handler: function() {
        console.log("Add new note...")
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


// parse yargs commands
yargs.parse();