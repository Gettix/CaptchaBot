const Discord = module.require("discord.js");
const fs = require("fs");
const devel = require('../botconfig.json');
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    let Owner = message.author;
    let uid = Owner.id;
    let u = profile[uid];
    if(u.coins << 3000) return message.reply("Не хватает средств!")
    
    u.vip = true;
    u.coins - 3000;
  

    
    message.channel.send('Успешно! Вы купили вип-доступ (До следующей перезагрузки бота)');
};
    

module.exports.help = {
    name: "addvip"
};
