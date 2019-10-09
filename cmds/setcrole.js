const Discord = module.require("discord.js");
const fs = require("fs");
const shop = require("../guildsshop.json");
module.exports.run = async (bot,message,args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У Вас нет прав");
  let gid = message.guild.id;
  
  let hh = args.pop();
  let role = args.join( " " );
  

  shop[gid].cost = hh;
  shop[gid].buyrole = role;

  if(shop[gid].buyrole !== "none") {
    bot.send("Роль после и до капчи изменена");
    } else {
  bot.send("Роль была добавлена");
  }
};

module.exports.help = {
    name: "setrole"
};
