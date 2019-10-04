const Discord = module.require("discord.js");
const fs = require("fs");
const myinv = require("../pokemon.json");

module.exports.run = async (bot,message,args) => {
  let uid = message.author.id;
  let numer = myinv[uid].num;
  let pokeinv = myinv[uid].names;
  let inventory = new Discord.RichEmbed()
  .setTitle("Ваш инвентарь")
  .setColor('#e22216')
  .addField('Количество покемонов', number, true)
  .addField("Покемоны:", pokeinv, true)
  bot.send(inventory);
};

module.exports.help = {
    name: "ping"
};
