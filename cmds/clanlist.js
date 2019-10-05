const Discord = module.require("discord.js");
const fs = require("fs");
const profile = require("../profile.json");
const clanlist = reqiure("../clanlist.json");
const bank = require("../bank.json");
const generator = require('generate-password');
module.exports.run = async (bot,message,args) => {
let uid = message.author.id;
let u = message.author;
let coin = profile[uid].coins;
let name = args[1];
let flag = args[2];
 
let password = generator.generate({
    length: 10,
    numbers: true,
    letters: false
});

    if ( args.length === 1 && args[ 0 ] === 'create' ) {
    if(coin < 1000) return bot.send("Недостаточно средств");
    if(!name) return bot.send("Укажите имя и флаг (Пример: .create MyClan 💀)");
    if(!flag) return bot.send("Укажите имя и флаг (Пример: .create MyClan 💀)");
        profile[uid].coins -= 1000;
        bank.coins += 1000;
    if(!clan[uid]) {
    clan[uid]={
    "name": name,
    "flag": flag,
    "people": 1,
    "creator": u,
    "clanid": password
    }}; else {
    bot.send("У вас уже есть клан!");
    };
    
    if ( args.length === 1 && args[ 0 ] === ' ' ) {
    let enbed = new Discord.RichEmbed()
    .setDescription("Clans")
    .setColor('#4B0082')
    .addField("🎏 YourClan", )

    bot.send(enbed);
    }
};
module.exports.help = {
    name: "clan"
};
