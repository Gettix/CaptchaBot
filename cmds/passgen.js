const Discord = require("discord.js");
let coins = require("../profile.json");
var generator = require('generate-password');

module.exports.run = async (bot, message, args) => {
let len = args.join(" ");
 
var password = generator.generate({
    length: len,
    numbers: true
});
 let pass = new Discord.RichEmbed()
 .setTitle("Генератор пароля :3")
 .addField("Ваш пароль:", password)
 .setFooter(`Длина: ${len} || LOL`)
 bot.send(pass);
}

module.exports.help = {
  name: "passgen"
}
