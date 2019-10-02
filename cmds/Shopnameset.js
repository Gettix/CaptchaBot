const Discord = module.require("discord.js");
const fs = require("fs");
const g = require("../guildsshop");
module.exports.run = async (bot,message,args) => {
    let name = args.join(" ");
    g.namerole = name;
    message.channel.send(`Имя роли сменено на ${name}`);
    

};

module.exports.help = {
    name: "shopname"
};
