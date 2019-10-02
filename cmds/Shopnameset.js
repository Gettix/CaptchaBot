const Discord = module.require("discord.js");
const fs = require("fs");
const g = require("../guildsshop");
module.exports.run = async (bot,message,args) => {
    let gid = message.guild.id;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У Вас нет прав");
    let name = args.join(" ");
    g[gid].namerole = name;
    message.channel.send(`Имя роли сменено на ${name}`);
    

};

module.exports.help = {
    name: "shopname"
};
