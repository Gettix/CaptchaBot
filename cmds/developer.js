const Discord = module.require("discord.js");
const fs = require("fs");
let d = require('./botconfig.json');
module.exports.run = async (bot,message,args) => {
    let dev = d.dev
    if(!message.member.d("BAN_MEMBERS")) return message.channel.send("У Вас нет прав");
    message.channel.send('pong!');
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "ping"
};
