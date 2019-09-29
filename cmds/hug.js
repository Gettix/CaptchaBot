const Discord = module.require("discord.js");
const fs = require("fs");
let p = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    let au = message.author.id
    let Owner = p[au]
    if(Owner.vip !== true) return message.reply("Только вип-пользователи могут использовать эту команду!")
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .addField("Hug", `${rUser} 🤗`)
    .setColor("#FE0101")
    .setImage("https://cdn.discordapp.com/attachments/566235609882951681/569242723035512842/r9aU2xv.gif")
    message.channel.send(embed);
};

module.exports.help = {
    name: "hug"
};

