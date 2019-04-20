const Discord = module.require("discord.js");
const fs = require("fs");
const d = require(./botconfig.json);
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У Вас нет прав");
    message.channel.send('pong!');
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "ping"
};
