const Discord = module.require("discord.js");
const fs = require("fs");
const shop = require("../guildsshop.json");
module.exports.run = async (bot,message,args) => {
  let gid = message.guild.id;
  if ( args.length === 1 && args[ 0 ] === 'delete' ) {
    shop[gid].buyrole = "none"
    shop[gid].cost = "none"
  }
  if(shop.buyrole !== "none") return bot.send("У вас уже есть роль. Удалите старую используя ``.setshop delete``");
  let role = args.join(" ");
  let cost = args.pop();
  shop[gid].buyrole = role;
  shop[gid].cost = cost;
  bot.send("Роль была добавлена в магазин вашего сервера");
};

module.exports.help = {
    name: "setshop"
};
