module.exports = function (msg, args) {
    
        if(msg.author.bot)
    {
        return;
    }
    
        // Join the arguments into a single string
        args_str = args.join(' ');

        // Replace all consecutive spaces with one space
        args_str = args_str.replace(/ +/g, ' ');
    
        // Split the string back into an array of arguments
        args = args_str.split(' ');

    len = args.length;
    content = '';
    for(i = 0; i < len;i++){
        content += `${i + 1}  ${args[i]}\n`;
    }
    msg.channel.send(content);
}