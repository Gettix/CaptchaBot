const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let enbed = new Discord.RichEmbed()
    .setDescription("Clan List")
    .setColor('#4B0082')
    .addField("🎏 Clans", "1.Повстанцы TheSCPFoundation")

    bot.send(enbed);
};
module.exports.help = {
    name: "clans"
};
