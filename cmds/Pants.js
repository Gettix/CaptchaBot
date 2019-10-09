const Discord = module.require("discord.js");
const fs = require("fs");
let p = require("../profile.json");

module.exports.run = async (bot,message,args) => {



    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
    message.channel.send("Link for vote: ***https://top.gg/bot/551625781818818590/vote***");
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "vote"
};
