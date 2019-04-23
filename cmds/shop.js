const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let enbed = new Discord.RichEmbed()
    .setDescription("Магазин")
    .setColor('#4B0082')
    .addField("💰 Валюта","1000:coffee: - 10 rub.", "1500:coffee: - 20 rub", "2300:coffee: - 30(🎁sale -9%)")
    .setFooter("CacaoBot 2019 | Все права защищены")
    .setThumbnail(message.guild.iconURL)
    .setImage('https://cdn.discordapp.com/attachments/566235609882951681/566235760311926784/rylgIUmPW.gif')

    bot.send(enbed);
};
module.exports.help = {
    name: "shop"
};
