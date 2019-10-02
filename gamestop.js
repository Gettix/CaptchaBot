const Discord = module.require("discord.js");
const fs = require("fs");
const g = require('../game.json');

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    g.starts = false;
    bot.send(` ${message.author} Остановил игру`);
};

module.exports.help = {
    name: "whstop"
};
