require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}🪄🍭🗽!`);
  });

client.on('messageCreate' , (msg) => {
    if(!msg.author.bot){
        for(var i = 0;i < 10;i++){
            msg.reply(msg.content);
        }
    }
});

  
  client.login(process.env.TOKEN);