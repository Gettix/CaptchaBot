const Discord = module.require("discord.js");
const fs = require("fs");
const shop = require("../guildsshop.json");
module.exports.run = async (bot,message,args) => {
  let gid = message.guild.id;
  
  let cost = args.pop();
  let role = args.join( " " );
  
  shop[gid].buyrole = role;
  shop[gid].cost = cost;
  if(shop[gid].buyrole !== "none") {
    bot.send("Роль была изменена");
    } else {
  bot.send("Роль была добавлена в магазин вашего сервера");
  }
};

module.exports.help = {
    name: "setshop"
};
