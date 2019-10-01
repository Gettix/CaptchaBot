const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let text = args(3);
    let name = args.pop();
    let title = args.join( " " );
    let enbed = new Discord.RichEmbed() 
    .setTitle(title)
    .addField(name, text)
    
    bot.send(enbed);
};

module.exports.help = {
    name: "cembed"
};
