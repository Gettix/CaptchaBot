const Discord = module.require("discord.js");
const fs = require("fs");
const profile = require('./profile.json');

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let uid = rUser.id;
    let Owner = message.author;
    let u = profile[uid];
    if(Owner.id !== devel.dev) return message.reply("Only the bot owner can use this command!")
    
    u.vip++;
    
    message.channel.send('Успешно! Теперь этот пользователь имеет вип-доступ');
    };
    

module.exports.help = {
    name: "addvip"
};
