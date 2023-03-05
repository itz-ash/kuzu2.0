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

const commandHandler = require('./commands');

client.on('messageCreate' , commandHandler); 

client.login(process.env.TOKEN);