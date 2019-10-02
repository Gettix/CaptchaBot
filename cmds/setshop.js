const Discord = module.require("discord.js");
const fs = require("fs");
const shop = require("../guildsshop.json");
module.exports.run = async (bot,message,args) => {
  if ( args.length === 1 && args[ 0 ] === 'delete' ) {
    shop.buyrole = "none"
    shop.cost = "none"
  }
  if(shop.buyrole !== "none") return bot.send("У вас уже есть роль. Удалите старую используя ``.setshop delete``");
  let role = args.join(" ");
  let cost = args.pop();
  
};

module.exports.help = {
    name: "ping"
};
