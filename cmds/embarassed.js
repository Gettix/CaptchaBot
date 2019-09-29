const Discord = module.require("discord.js");
const fs = require("fs");
let p = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    let au = message.author.id
    let Owner = p[au]
    if(Owner.vip !== true) return message.reply("Только вип-пользователи могут использовать эту команду!")
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
    message.channel.send(`${message.author} embarassed 😄`);
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "embarassed"
};
