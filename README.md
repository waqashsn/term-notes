# Term Notes
A no-frills note taking app for terminal. Stores notes in JSON format in notes.json file. Adds timestamps to notes.


### Commands

- Run `app.js list` to list notes
- Run `app.js add --title="[title for the note] --body="[body for the note]"` to create new note
- Run `app.js read --title="[title of the note]"` to read a note in detail
- Run `app.js remove --title="[title of the note to be removed]"` to remove a note 

### Info
Built in a day on [NodeJS](http://nodejs.org/ "NodeJS") using [Chalk](https://www.npmjs.com/package/chalk "Chalk") and [Yargs](https://www.npmjs.com/package/yargs "Yargs"). Contributions welcomed.