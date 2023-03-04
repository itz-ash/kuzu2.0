require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
import fetch from 'node-fetch';
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

client.on('messageCreate' , async (msg) => {
    if(msg.author.bot)
    {
        return;
    }
    
    if(msg.content === '!kuzu'){
        const r = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[r]);
    } else if(msg.content === '!gif'){
      msg.channel.send('gif!')
      let url = `https://tenor.googleapis.com/v2/search?q=women&key=${process.env.TENOR}&client_key=my_test_app&limit=8`;
      let response = await fetch(url);
      let json = await response.json();
      console.log(json);
    }
});

  
  client.login(process.env.TOKEN);