const fs = require('fs');
const path = require('path');

const commands = {};

// Get all files in the commands directory
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands'));

// Loop through each file and add it to the commands object
for (const file of commandFiles) {
  const commandName = file.split('.')[0]; // remove file extension
  const command = require(`./commands/${file}`);

  commands[commandName] = command;
}

module.exports = async function (msg){
    let tokens = msg.content.split(" ");
    let command = tokens.shift();

    if (command.charAt(0) === '!'){
        command = command.substring(1);

        if (command in commands) {
          commands[command](msg, tokens);
        }
    }
}

