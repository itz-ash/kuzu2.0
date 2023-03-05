const replies = [
    'Hello!!',
    '🗽🍭🪄',
    'Wassup!'
]

module.exports = function (msg, args) {

if(msg.author.bot)
{
    return;
}

const r = Math.floor(Math.random() * replies.length);
msg.channel.send(replies[r]);
}