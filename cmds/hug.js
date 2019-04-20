const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
    let replies = ["https://cdn.discordapp.com/attachments/566235609882951681/569267936611663883/4932d664480d4e43.jpeg

 , "

https://cdn.discordapp.com/attachments/566235609882951681/569267936611663885/BPLqSJC.gif", "https://cdn.discordapp.com/attachments/566235609882951681/569242723035512842/r9aU2xv.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`)
    .addField("Hug", `${rUser} 🤗`)
    .setColor("#FE0101")
    .setImage(replies[result])
    message.channel.send(embed);
};

module.exports.help = {
    name: "hug"
};
