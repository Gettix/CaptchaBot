const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../profile.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345

  if(!coins[message.author.id]){
    return message.reply("Вы не можете отправить монетки себе.")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }
  let co = args.pop();
  let p = args.join(" ");

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("Недостаточно валюты.");

  sCoins -= co;
  pCoins += co;






  message.channel.send(`${message.author} has given ${pUser} ${co} coffee.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}
