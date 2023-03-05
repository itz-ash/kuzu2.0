module.exports = function (msg, args) {
    
        if(msg.author.bot)
    {
        return;
    }
    
    len = args.length;
    content = '';
    tmpcontent = '';
    for(i = 0; i < len;i++){
        tmpcontent = `${i + 1}  ${args[i]} \n`;
        content = content + tmpcontent;
    }
    msg.channel.send(content);
}