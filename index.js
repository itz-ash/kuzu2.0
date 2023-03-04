const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const { TOKEN } = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}🪄🍭🗽!`);
  });

client.on('messageCreate' , (msg) => {
    console.log(`${msg.content}`);
});

  
  client.login(TOKEN);