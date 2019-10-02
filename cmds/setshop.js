const Discord = module.require("discord.js");
const fs = require("fs");
const shop = require("../guildsshop.json");
module.exports.run = async (bot,message,args) => {
  
  let role = args.join(" ");
  let cost = args.pop();
  
};

module.exports.help = {
    name: "ping"
};
