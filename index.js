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

const replies = [
    'Hello!!',
    '🗽🍭🪄',
    'Wassup!'
]

client.on('messageCreate' , (msg) => {
    if(msg.author.bot)
    {
        return;
    }
    
    const r = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[r]);
});

  
  client.login(process.env.TOKEN);