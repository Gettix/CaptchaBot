const Discord = require('discord.js');
const fs = require("fs");
const profile = require('../profile.json');

module.exports.run = async (bot,message,args) => {
  let uid = message.author.id;
  let stats = args.join(" ");
  
  profile[uid].status = stats;
  
  bot.send("Ваш статус изменен.")
  
}

module.exports.help = {
  name:"status"
}
