const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let uid = rUser.id;
    let Owner = message.author;
    let u = profile[uid];
    if(Owner.id !== devel.dev) return message.reply("Only the bot owner can use this command!")
    
    u.vip++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err) =>{
        if(err) console.log(err);
    });
    
    message.channel.send('Успешно! Теперь этот пользователь имеет вип-доступ');
};
    

module.exports.help = {
    name: "addvip"
};
