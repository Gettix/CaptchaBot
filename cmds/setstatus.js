const Discord = require('discord.js');
const fs = require("fs");
const profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
   let au = message.author.id
    let Owner = p[au]
    if(Owner.vip !== true) return message.reply("Только вип-пользователи могут использовать эту команду!")
  let stats = args.join(" ");
  
  profile[au].status = stats;
  
  bot.send("Ваш статус изменен.")
  
}

module.exports.help = {
  name:"status"
}
