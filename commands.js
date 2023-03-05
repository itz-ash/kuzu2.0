

// const gif = require('./commands/gif.js');
const kuzu = require('./commands/kuzu.js');
const commands = { kuzu };
module.exports = async function (msg){

    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === '!'){
        command = command.substring(1);
        commands[command](msg, tokens)
    }



    if(msg.content === '!kuzu'){
    } else if(msg.content === '!gif'){
    }
}
