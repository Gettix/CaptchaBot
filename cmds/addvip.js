const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('./profile.json');

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let uid = rUser.id;
    let u = profile[uid];
    u.vip++;
    

module.exports.help = {
    name: "addvip"
};
