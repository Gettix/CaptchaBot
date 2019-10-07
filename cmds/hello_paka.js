const Discord = module.require("discord.js");
const fs = require("fs");
const helo = require("../guildsshop.json");
module.exports.run = async (bot,message,args) => {
    let mess = args.join(" ");
    let gid = message.guild.id;
    if(!mess) return bot.send("Пожалуйста, напишите хотя бы ''привет'' новому участнику..");
    helo[gid].hello = mess;
    bot.send(`Приветствие изменено на ${mess}`);
};

module.exports.help = {
    name: "himessage"
};
