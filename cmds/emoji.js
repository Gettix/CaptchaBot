const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let uid = message.author.id;
    let emoji = args.join(" ");
    if ( args.length === 1 && args[ 0 ] !== 'paste' ) {
    p[uid].copy = emoji;

    } else {
        bot.send(p[uid].copy);
    }
};

module.exports.help = {
    name: "emoji"
};
