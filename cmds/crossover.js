const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    .setImage('https://cdn.discordapp.com/attachments/566235609882951681/568095900761718785/svyat-1.gif')
    message.channel.send(`${message.author} crossed ✝️`);
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "crossover"
};
