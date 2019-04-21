const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../profile.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345

  if(!coins[message.author.id]){
    return message.reply("Вы не можете отправить монетки себе.")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  

  let sCoffee = coffee[message.author.id].coffee;

  let sCoins = coins[message.author.id].coins;

  if(sCoins < 100) return message.reply("Недостаточно монет.Для покупки нужно 50 монет.");

  coins[message.author.id] = {
    coins: sCoins - parseInt(100)
  };
  
  coins[message.author.id] = {
    coffee: sCoffee ++,
  };




  message.channel.send(`${message.author} buy coffee☕️);

  fs.writeFile("./profile.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "buycoffee"
}
